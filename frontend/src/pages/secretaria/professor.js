import { useState } from 'react';
import axios from 'axios';
import css from '@/styles/Form.module.scss';
import { Input, Footer, Header } from '../components.js';

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export default function Home() {
   const [getID, setID] = useState('');
   const [getNome, setNome] = useState('');
   const [getTitulacao, setTitulacao] = useState('');
   const [getEmail, setEmail] = useState('');

   const handleSubmit = async (e) => {

      e.preventDefault();

      if (/\d/.test(getNome)) {
         console.error('O nome não pode conter números.');
         return;
      }

      try {
         const response = await axios.post('http://localhost:8080/professor', { nome: getNome, titulacao: getTitulacao, emailPessoal: getEmail, emailCorporativo: gerarEmail() });

         console.log('Professor salvo com sucesso:', response.data);
         setNome("");
         setEmail("");
         setTitulacao("");
      } catch (error) {
         console.error('Erro ao salvar professor:', error);
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

   return (
      <>
         <Header />

         <form className={css.form} autoComplete="off" onSubmit={handleSubmit}>
            <h1 className={css.h1}>Cadastrar Professor</h1>
            <h2 className={css.h2}>Em desenvolvimento.</h2>
            {/* <div className={css.row}>
               <Input id="nome" title="Nome" type="text" value={getNome} onChange={setNome} />
               <Input id="titulacao" title="Titulação" type="text" value={getTitulacao} onChange={setTitulacao} />
            </div>

            <div className={css.row}>
               <Input id="email" title="Email" type="email" value={getEmail} onChange={setEmail} />
            </div>

            <div className={css.center}>
               <input id="btnInserir" className={css.btn} type="submit" value="Inserir" />
               <input id="btnPesquisar" className={css.btn} type="button" onClick={pesquisar} value="Pesquisar" />
               <input id="btnDeletar" className={css.btn} type="button" onClick={deletar} value="Deletar" />
            </div> */}
         </form>

         <Footer />
      </>
   );
}