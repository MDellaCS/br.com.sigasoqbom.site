import { useState } from 'react';
import axios from 'axios';
import css from '@/styles/Form.module.scss';
import { Input, Footer } from './components.js';
import 'react-toastify/dist/ReactToastify.css';

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export default function Home() {
   const [id, setId] = useState('');
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
            throw new Error('Mais de um registro encontrado.');
         }

         if (user.length === 0) {
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
            await sleep(10);
         }

         await preencherCampo("" + user[0].id, setId);

         await preencherCampo("" + user[0].username, setUsername);

         await preencherCampo("" + user[0].email, setEmail);

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
               <Input id="id" title="ID" type="text" value={id} onChange={setId} />
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