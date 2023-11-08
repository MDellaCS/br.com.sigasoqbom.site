import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import css from '@/styles/Form.module.scss'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export function Button(props) {

    let id = "id" + props.value.replace(/\s+/g, '');

    return (
        <Link href={props.href}><input id={id} type="button" className={css.btn} value={props.value} /></Link>
    )
}

export function Input(props) {

    return (
        <>
            <label for={props.id} className={css.lbl + " " + css.req}>{props.title}</label>
            <br />
            <input id={props.id} type={props.type} className={css.formInput} required />
            <br />
        </>
    )
}

export function Header() {
    return (
        <>
            <Head>
                <title>Página</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <div className={css.sticky}>
                <Link href="../"><input type="button" className={css.btn + " " + css.floatL} value="Voltar" /></Link>
            </div>

            <div className={css.center}>
                <Button href="aluno" value="Aluno" />
                <Button href="professor" value="Professor" />
                <Button href="disciplina" value="Disciplina" />
                <Button href="curso" value="Curso" />
            </div>
        </>
    )
}