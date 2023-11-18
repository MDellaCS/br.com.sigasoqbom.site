import { useState } from 'react';
import axios from 'axios';
import css from '@/styles/Form.module.scss';
import { Input, Button, Footer } from './secretaria/components.js';
import { Validate } from './scripts/formValid.js';

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
            </div>
         </form>

         <Footer />
      </>
   );
}