import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link';
import css from '@/styles/Form.module.scss'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
   return (
      <>

         <Link href="secretaria/aluno" className={css.link}>Clique Aqui</Link>

      </>
   )
}
