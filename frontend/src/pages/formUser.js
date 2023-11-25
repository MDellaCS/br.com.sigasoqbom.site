import { useState } from 'react';
import axios from 'axios';
import css from '@/styles/Form.module.scss';
import { Input, Button, Footer, Alert } from './components.js';
import Swal from 'sweetalert2';

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

         Swal.fire({
            position: "center",
            icon: "success",
            title: "Cadastrado com sucesso",
            showConfirmButton: false,
            timer: 1500,
            background: "#373737",
            color: "#59afe9",
            padding: "15px",
          });

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
            Swal.fire({
               icon: "error", titleText: "Erro ao buscar", text: "Mais de um registro encontrado."
            });
            throw new Error('Mais de um registro encontrado.');
         }

         if (user.length === 0) {
            Swal.fire({
               icon: "error", titleText: "Erro ao buscar", text: "Nenhum registro encontrado."
            });
            throw new Error('Nenhum registro encontrado.');
         }

         setEmail(user[0].email);

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