import { useState } from 'react';
import axios from 'axios';
import css from '@/styles/Form.module.scss';
import { Input, Footer } from './components.js';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export default function Home() {
   const [username, setUsername] = useState('');
   const [email, setEmail] = useState('');

   const handleSubmit = async (e) => {

      e.preventDefault();

      if (/\d/.test(username)) {
         console.error('O nome não pode conter números.');
         return;
      }

      try {
         const response = await axios.post('http://localhost:8080/user', { username, email });

         console.log('Usuário salvo com sucesso:', response.data);
         setUsername("");
         setEmail("");
      } catch (error) {
         console.error('Erro ao salvar usuário:', error);
      }
   };

   const pesquisar = async () => {
      try {
         const response = await axios.get('http://localhost:8080/user/byname', {
            params: {
               name: username,
            },
         });

         const user = response.data;

         if (user.length > 1) {
            //Alert
            alert("Mais de um");
            throw new Error('Mais de um registro encontrado.');
         }

         if (user.length === 0) {
            alert("0");
            throw new Error('Nenhum registro encontrado.');
         }

         async function preencherCampo(field, setValueFunction) {
            setValueFunction("");

            for (let i = 0; i < user[0][field].length; i++) {
               const char = user[0][field].charAt(i);
               setValueFunction(previousValue => previousValue + char);

               await sleep(10);
            }
         }

         await preencherCampo('username', setUsername);

         await preencherCampo('email', setEmail);

         console.log('Usuário carregado com sucesso:', user);
      } catch (error) {
         console.error('Erro ao carregar o usuário:', error);
      }
   };

   return (
      <>
         <form className={css.form} autoComplete="off" onSubmit={handleSubmit}>
            <h1 className={css.h1}>Teste User</h1>

            <div className={css.row}>
               <Input id="nome" title="Nome" type="text" value={username} onChange={setUsername} />
            </div>

            <div className={css.row}>
               <Input id="email" title="Email" type="email" value={email} onChange={setEmail} />
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