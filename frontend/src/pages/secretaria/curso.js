import { useState } from 'react';
import axios from 'axios';
import css from '@/styles/Form.module.scss';
import { Input, Footer, Header } from '../components.js';

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export default function Home() {
   const [getID, setID] = useState('');
   const [getNome, setNome] = useState('');
   const [getCarga, setCarga] = useState('');
   const [getSigla, setSigla] = useState('');
   const [getEnade, setEnade] = useState('');
   const [getTurno, setTurno] = useState('');

   const handleSubmit = async (e) => {

      e.preventDefault();

      try {
         const response = await axios.post('http://localhost:8080/cursos', {
            nome: getNome,
            cargaHoraria: getCarga,
            sigla: getSigla,
            enade: getEnade,
            turno: getTurno
         });

         console.log('Salvo com sucesso:', response.data);
         setNome("");
         setCarga("");
         setSigla("");
         setEnade("");
         setTurno("");

      } catch (error) {
         console.error('Erro ao salvar:', error);
      }
   };

   const deletar = async () => {

      document.getElementById("btnDeletar").disabled = true;

      try {
         const response = await axios.delete('http://localhost:8080/cursos', {
            params: {
               id: getID
            },
         });

         console.log('Deletado com sucesso:', response.data);
      } catch (error) {
         console.error('Erro ao deletar:', error);
      } finally {
         await sleep(750);
         document.getElementById("btnDeletar").disabled = false;
      }
   };

   const pesquisar = async () => {

      document.getElementById("btnPesquisar").disabled = true;

      try {
         const response = await axios.get('http://localhost:8080/professor/bycpf', {
            params: {
               cpf: getCPF
            },
         });

         if (response.data.length > 1) {
            //Alert
            throw new Error('Mais de um registro encontrado.');
         }

         if (response.data.length === 0) {
            //Alert
            throw new Error('Nenhum registro encontrado.');
         }

         async function preencherCampo(field, setValueFunction) {
            setValueFunction("");

            for (let i = 0; i < field.length; i++) {
               const char = field.charAt(i);
               setValueFunction(previousValue => previousValue + char);

               await sleep(10);
            }
         }

         setID("" + response.data[0].id);

         preencherCampo("" + response.data[0].cpf, setCPF);

         preencherCampo("" + response.data[0].nome, setNome);

         preencherCampo("" + response.data[0].emailPessoal, setEmail);

         preencherCampo("" + response.data[0].titulacao, setTitulacao);

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
            <h1 className={css.h1}>Adicionar Curso</h1>

            <div className={css.row}>
               <Input id="nome" title="Nome" type="text" value={getNome} onChange={setNome} />
               <Input id="sigla" title="Sigla" type="text" value={getSigla} onChange={setSigla} />
            </div>

            <div className={css.row}>
               <Input id="carga" title="Carga Horária" type="number" value={getCarga} onChange={setCarga} />
               <Input id="turno" title="Turno" type="text" value={getTurno} onChange={setTurno} />
               <Input id="enade" title="Nota do ENADE" type="text" value={getEnade} onChange={setEnade} />
            </div>

            <div className={css.center}>
               <input id="btnInserir" className={css.btn} type="submit" value="Inserir" />
               <input id="btnPesquisar" className={css.btn} type="button" onClick={pesquisar} value="Pesquisar" />
               <input id="btnDeletar" className={css.btn} type="button" onClick={deletar} value="Deletar" />
            </div>
         </form>

         <Footer />
      </>
   );
}