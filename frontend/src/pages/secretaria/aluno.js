import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import css from '@/styles/Form.module.scss'
import Link from 'next/link';
import { Header, Input, Button, Footer } from './components.js';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

   return (
      <>

         <Header />

         <form className={css.form} autoComplete="off">

            <h1 className={css.h1}>Matricular Aluno</h1>

            <div className={css.row}>
               <Input id="nome" title="Nome Completo" type="text" />
               <Input id="nascimento" title="Data de Nascimento" type="date" />
            </div>

            <div className={css.row}>
               <Input id="nomesocial" title="Nome Social" type="text" />
            </div>

            <div className={css.row}>
               <Input id="ra" title="Registro Acadêmico" type="text" />
               <Input id="cpf" title="CPF" type="text" />
            </div>

            <div className={css.row}>
               <Input id="email" title="Email Pessoal" type="email" />
            </div>

            <div className={css.row}>
               <Input id="instituicao" title="Instituição de Conclusão do 2º Grau" type="text" />
               <Input id="conclusao" title="Ano de Conclusão" type="number" />
            </div>

            <div className={css.row}>
               <Input id="pontuacao" title="Pontuação" type="number" />
               <Input id="posicao" title="Posição" type="number" />
            </div>

            <label for="curso" className={css.lbl}>Curso</label>
            <br />
            <select id="curso" className={css.formInput} name="cursoAluno" required>
               <option value="" selected disabled hidden>Escolha o Curso</option>
               {/* Pegar os cursos do BD */}
            </select>
            <br />

            <div className={css.center}>
               <Button href=" " value="Inserir" />
               <Button href=" " value="Atualizar" />
               <Button href=" " value="Deletar" />
            </div>

         </form >

         <Footer />

      </>
   )
}