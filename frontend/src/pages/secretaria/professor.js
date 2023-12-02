import { useState } from 'react';
import axios from 'axios';
import css from '@/styles/Form.module.scss';
import { Input, Footer } from '../components.js';
import 'react-toastify/dist/ReactToastify.css';

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export default function Home() {
   const [getCPF, setCPF] = useState('');
   const [getNascimento, setNascimento] = useState('');
   const [getNome, setNome] = useState('');
   const [getEmail, setEmail] = useState('');
   const [getTitulacao, setTitulacao] = useState('');

   const handleSubmit = async (e) => {

      e.preventDefault();

      if (/\d/.test(getNome)) {
         console.error('O nome não pode conter números.');
         return;
      }

      try {
         const response = await axios.post('http://localhost:8080/professor', { getCPF, getNome, getEmail, getTitulacao });

         console.log('Professor salvo com sucesso:', response.data);
         setCPF("");
         setNascimento("");
         setNome("");
         setEmail("");
         setTitulacao("");
      } catch (error) {
         console.error('Erro ao salvar professor:', error);
      }
   };

   const pesquisar = async () => {
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

         await preencherCampo("" + response.data[0].cpf, setCPF);

         await preencherCampo("" + response.data[0].data_nascimento, setNascimento);

         await preencherCampo("" + response.data[0].nome, setNome);

         await preencherCampo("" + response.data[0].email, setEmail);

         await preencherCampo("" + response.data[0].titulacao, setTitulacao);

         console.log('Professor carregado com sucesso:', response.data);
      } catch (error) {
         console.error('Erro ao carregar o professor:', error);
      }
   };

   return (
      <>
         <form className={css.form} autoComplete="off" onSubmit={handleSubmit}>
            <h1 className={css.h1}>Teste User</h1>

            <div className={css.row}>
               <Input id="nome" title="Nome" type="text" value={getNome} onChange={setNome} />
            </div>

            <div className={css.row}>
               <Input id="cpf" title="CPF" type="text" value={getCPF} onChange={setCPF} />
               <Input id="nascimento" title="Data de Nascimento" type="date" value={getNascimento} onChange={setNascimento} />
            </div>

            <div className={css.row}>
               <Input id="titulacao" title="Titulação" type="text" value={getTitulacao} onChange={setTitulacao} />
               <Input id="email" title="Email" type="email" value={getEmail} onChange={setEmail} />
            </div>

            <div className={css.center}>
               <input className={css.btn} type="submit" value="Inserir" />
               <input className={css.btn} type="button" onClick={pesquisar} value="Pesquisar" />
            </div>
         </form>

         <Footer />
      </>
   );
}