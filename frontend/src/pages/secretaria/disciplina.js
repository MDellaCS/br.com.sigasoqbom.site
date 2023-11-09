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

            <h1 className={css.h1}>Cadastrar Disciplina</h1>

            <div className={css.row}>
               <Input id="nome" title="Nome" type="text" />
               <Input id="horas" title="Horas Semanais" type="number" />
            </div>

            <div className={css.row}>
               <Input id="semestre" title="Semestre" type="number" />
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