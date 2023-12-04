import { useState } from 'react';
import axios from 'axios';
import css from '@/styles/Form.module.scss';
import { Input, Footer, Header } from '../components.js';

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export default function Home() {
   const [getID, setID] = useState('');
   const [getNome, setNome] = useState('');
   const [getQtdAulas, setQtdAulas] = useState('');
   const [getSemestre, setSemestre] = useState('');
   const [getCurso, setCurso] = useState('');

   const handleSubmit = async (e) => {

      e.preventDefault();

      try {
         const response = await axios.post('http://localhost:8080/disciplinas', {
            nome: getNome,
            qtdAulas: getQtdAulas,
            semestre: getSemestre,
            idCurso: getCurso
         });

         console.log('Salvo com sucesso:', response.data);
         setID("");
         setNome("");
         setQtdAulas("");
         setSemestre("");
         setCurso("");

      } catch (error) {
         console.error('Erro ao salvar:', error);
      }
   };

   function gerarEmail() {

      const full = getNome.toLowerCase().split(' ');

      const first = full[0];
      const last = full[full.length - 1];

      const num = Math.floor(Math.random() * 10000).toString().padStart(4, '0');

      const email = first + "." + last + num + "@fatec.sp.gov.br";

      return email;

   };

   const deletar = async () => {

      document.getElementById("btnDeletar").disabled = true;

      try {
         const response = await axios.delete('http://localhost:8080/disciplinas/' + getID);

         console.log('Professor deletado com sucesso:', response.data);
      } catch (error) {
         console.error('Erro ao deletar o professor:', error);
      } finally {
         await sleep(750);
         document.getElementById("btnDeletar").disabled = false;
      }
   };

   const editar = async () => {

      document.getElementById("btnAtualizar").disabled = true;

      try {
         const response = await axios.put('http://localhost:8080/disciplinas/' + getID, {
            nome: getNome,
            qtdAulas: getQtdAulas,
            semestre: getSemestre,
            idCurso: getCurso
         });

         console.log('Editado com sucesso:', response.data);
      } catch (error) {
         console.error('Erro ao editar:', error);
      } finally {
         await sleep(750);
         document.getElementById("btnAtualizar").disabled = false;
      }
   };

   const pesquisar = async () => {

      document.getElementById("btnPesquisar").disabled = true;

      try {
         const response = await axios.get('http://localhost:8080/disciplinas/' + getID, {
            params: {
               cod: getID
            },
         });

         async function preencherCampo(field, setValueFunction) {
            setValueFunction("");

            const intervalo = 700 / field.length;

            for (let i = 0; i < field.length; i++) {
               const char = field.charAt(i);
               setValueFunction(previousValue => previousValue + char);

               await sleep(intervalo);
            }
         }

         preencherCampo("" + response.data.nome, setNome);

         preencherCampo("" + response.data.qtdAulas, setQtdAulas);

         preencherCampo("" + response.data.curso.cod, setCurso);

         preencherCampo("" + response.data.semestre, setSemestre);

         console.log('Carregado com sucesso:', response.data);
      } catch (error) {
         console.error('Erro ao carregar:', error);
      } finally {
         await sleep(750);
         document.getElementById("btnPesquisar").disabled = false;
      }
   };

   return (
      <>
         <Header />

         <form className={css.form} autoComplete="off" onSubmit={handleSubmit}>
            <h1 className={css.h1}>Adicionar Disciplina</h1>

            <div className={css.row}>
               <Input id="nome" title="Nome" type="text" value={getNome} onChange={setNome} />
               <Input id="curso" title="Curso" type="text" value={getCurso} onChange={setCurso} />
            </div>

            <div className={css.row}>
               <Input id="qtdaulas" title="Quantidade de Aulas" type="number" value={getQtdAulas} onChange={setQtdAulas} />
               <Input id="semestre" title="Semestre" type="number" value={getSemestre} onChange={setSemestre} />
            </div>

            <div className={css.row}>
               <Input id="id" title="ID" type="text" value={getID} onChange={setID} />
               <input id="btnPesquisar" className={css.btn} type="button" onClick={pesquisar} value="Pesquisar" />
            </div>

            <div className={css.center}>
               <input id="btnInserir" className={css.btn} type="submit" value="Inserir" />
               <input id="btnAtualizar" className={css.btn} type="button" onClick={editar} value="Editar" />
               <input id="btnDeletar" className={css.btn} type="button" onClick={deletar} value="Deletar" />
            </div>
         </form>

         <Footer />
      </>
   );
}