import { useState } from 'react';
import axios from 'axios';
import css from '@/styles/Form.module.scss';
import { Input, Footer, Header } from '../components.js';

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export default function Home() {
   const [getRA, setRA] = useState('');
   const [getCurso, setCurso] = useState('');
   const [getNome, setNome] = useState('');
   const [getNascimento, setNascimento] = useState('');
   const [getNomeSocial, setNomeSocial] = useState('');
   const [getEmail, setEmail] = useState('');
   const [getDataConclusao, setDataConclusao] = useState('');
   const [getCPF, setCPF] = useState('');
   const [getLugarConclusao, setLugarConclusao] = useState('');
   const [getPtVestibular, setPtVestibular] = useState('');
   const [getPosVestibular, setPosVestibular] = useState('');

   const handleSubmit = async (e) => {

      e.preventDefault();

      try {
         const response = await axios.post('http://localhost:8080/alunos', {
            ra: "" + gerarRA(),
            nome: getNome,
            dataNasc: getNascimento,
            nomeSocial: getNomeSocial,
            emailPessoal: getEmail,
            dataConc2grau: getDataConclusao,
            cpf: getCPF,
            instConc2grau: getLugarConclusao,
            ptVestibular: parseInt(getPtVestibular),
            posVestibular: parseInt(getPosVestibular),
            emailCorporativo: gerarEmail(),
            idCurso: getCurso
         });

         console.log('Salvo com sucesso:', response.data);
         setNome("");
         setNascimento("");
         setNomeSocial("");
         setEmail("");
         setDataConclusao("");
         setCPF("");
         setLugarConclusao("");
         setPtVestibular("");
         setPosVestibular("");

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

   function gerarRA() {

      const min = Math.pow(10, 14);
      const max = Math.pow(10, 15) - 1;

      const ra = Math.floor(Math.random() * (max - min + 1)) + min;

      return ra;

   };

   const deletar = async () => {

      document.getElementById("btnDeletar").disabled = true;

      try {
         const response = await axios.delete('http://localhost:8080/alunos/' + getRA);

         console.log('Deletado com sucesso:', response.data);
      } catch (error) {
         console.error('Erro ao deletar:', error);
      } finally {
         await sleep(750);
         document.getElementById("btnDeletar").disabled = false;
      }
   };

   const editar = async () => {

      document.getElementById("btnAtualizar").disabled = true;

      try {
         const response = await axios.put('http://localhost:8080/alunos/' + getRA, {
            ra: "" + getRA,
            nome: getNome,
            dataNasc: getNascimento,
            nomeSocial: getNomeSocial,
            emailPessoal: getEmail,
            dataConc2grau: getDataConclusao,
            cpf: getCPF,
            instConc2grau: getLugarConclusao,
            ptVestibular: parseInt(getPtVestibular),
            posVestibular: parseInt(getPosVestibular),
            emailCorporativo: getEmail,
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
         const response = await axios.get('http://localhost:8080/alunos/' + getRA);

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

         preencherCampo("" + response.data.cpf, setCPF);

         preencherCampo("" + response.data.nomeSocial, setNomeSocial);

         preencherCampo("" + response.data.dataNasc, setNascimento);

         preencherCampo("" + response.data.emailPessoal, setEmail);

         preencherCampo("" + response.data.instConc2grau, setLugarConclusao);

         preencherCampo("" + response.data.dataConc2grau, setDataConclusao);

         preencherCampo("" + response.data.ptVestibular, setPtVestibular);

         preencherCampo("" + response.data.posVestibular, setPosVestibular);

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
            <h1 className={css.h1}>Cadastrar Aluno</h1>

            <div className={css.row}>
               <Input id="nome" title="Nome" type="text" value={getNome} onChange={setNome} />
               <Input id="curso" title="Curso" type="text" value={getCurso} onChange={setCurso} />
            </div>

            <div className={css.row}>
               <Input id="cpf" title="CPF" type="text" value={getCPF} onChange={setCPF} />
               <Input id="nomesocial" title="Nome Social" type="text" value={getNomeSocial} onChange={setNomeSocial} />
            </div>

            <div className={css.row}>
               <Input id="nascimento" title="Data de Nascimento" type="date" value={getNascimento} onChange={setNascimento} />
               <Input id="email" title="Email" type="email" value={getEmail} onChange={setEmail} />
            </div>

            <div className={css.row}>
               <Input id="lugarconclusao" title="Instituição de Conclusão do 2º Grau" type="text" value={getLugarConclusao} onChange={setLugarConclusao} />
               <Input id="dataconclusao" title="Data de Conclusão" type="date" value={getDataConclusao} onChange={setDataConclusao} />
            </div>

            <div className={css.row}>
               <Input id="ptvestibular" title="Pontuação no Vestibular" type="number" value={getPtVestibular} onChange={setPtVestibular} />
               <Input id="posvestibular" title="Posição no Vestibular" type="number" value={getPosVestibular} onChange={setPosVestibular} />
            </div>

            <div className={css.row}>
               <Input id="ra" title="RA" type="text" value={getRA} onChange={setRA} />
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