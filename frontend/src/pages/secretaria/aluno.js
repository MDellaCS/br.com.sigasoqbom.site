import { useState } from 'react';
import axios from 'axios';
import css from '@/styles/Form.module.scss';
import { Input, Footer, Header } from '../components.js';

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export default function Home() {
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
            ra: gerarRA(),
            nome: getNome,
            dataNasc: getNascimento,
            nomeSocial: getNomeSocial,
            emailPessoal: getEmail,
            dataConc2Grau: getDataConclusao,
            cpf: getCPF,
            instConc2Grau: getLugarConclusao,
            ptVestibular: getPtVestibular,
            posVestibular: getPosVestibular,
            emailCorporativo: gerarEmail()
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
         const response = await axios.delete('http://localhost:8080/professor', {
            params: {
               id: getID
            },
         });

         console.log('Professor deletado com sucesso:', response.data);
      } catch (error) {
         console.error('Erro ao deletar o professor:', error);
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

         console.log('Professor carregado com sucesso:', response.data);
      } catch (error) {
         console.error('Erro ao carregar o professor:', error);
      } finally {
         await sleep(750);
         document.getElementById("btnPesquisar").disabled = false;
      }
   };

   function isChristmasWeek() {
      var today = new Date();

      var dayOfWeek = today.getDay();

      if (today.getMonth() === 11 && today.getDate() >= 18 && today.getDate() <= 25) {
         return true;
      }

      return false;
   }

   // Exemplo de uso
   if (isChristmasWeek()) {
      console.log('Estamos na semana do Natal!');
   } else {
      console.log('Não estamos na semana do Natal.');
   }


   return (
      <>
         <Header />

         <form className={css.form} autoComplete="off" onSubmit={handleSubmit}>
            <h1 className={css.h1}>Cadastrar Aluno</h1>

            <div className={css.row}>
               <Input id="nome" title="Nome" type="text" value={getNome} onChange={setNome} />
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