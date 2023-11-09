import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import css from '@/styles/Form.module.scss'
import Link from 'next/link';
import { Header, Input, Button, Footer } from './index.js';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

   return (
      <>

         <Header />

         <form className={css.form} autoComplete="off">

            <h1 className={css.h1}>Cadastrar Curso</h1>

            <div className={css.row}>
               <Input id="nome" title="Nome" type="text" />
               <Input id="carga" title="Carga Horária" type="number" />
            </div>

            <div className={css.row}>
               <Input id="sigla" title="Sigla" type="text" />
               <Input id="enade" title="Nota no Enade" type="number" />
            </div>

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