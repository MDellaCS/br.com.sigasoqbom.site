import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import css from '@/styles/Form.module.scss'
import js from '@/scripts/formValidation.js'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export function A(props) {

    return <a href={props.href} target="_blank" className={css.link} > {props.value}</a >

}

export function Button(props) {

    let id = "btn" + props.value.replace(/\s+/g, '');

    return <Link href={props.href}><input id={id} type="button" className={css.btn} value={props.value} /></Link>

}

export function Input(props) {

    return (
        <div className={css.column}>
            <div>
                <label for={props.id} className={css.lbl}>{props.title}</label>
            </div>
            <div>
                <input id={props.id} type={props.type} className={css.formInput} />
            </div>
        </div>
    )
}

export function Header() {
    return (
        <>
            <Head>
                <title>Secretaria</title>
                <meta name="description" content="Área da Secretaria" />
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

export function Footer() {

    const d = new Date();
    let year = d.getFullYear();

    return (
        <div className={css.footer}>
            Siga Só Que Bom&trade;
            <br />
            Todos os direitos reservados &copy; {year}
            <br />
            <br />
            Developed by
            <br />
            <A href="https://github.com/MDellaCS" value="Matheus Della" />&nbsp;-&nbsp;
            <A href="https://github.com/hkokt" value="Hugo Koketu" />&nbsp;-&nbsp;
            <A href="https://github.com/AntonioWilliam" value="Antonio William" />&nbsp;-&nbsp;
            <A href="https://github.com/Frm2003" value="Felippe Ramos" />&nbsp;-&nbsp;
            <A href="https://github.com/Nebr4m" value="Luis Gustavo" />
        </div>
    )
}