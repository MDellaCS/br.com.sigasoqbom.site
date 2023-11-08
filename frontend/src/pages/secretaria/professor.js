import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import css from '@/styles/Form.module.scss'
import Link from 'next/link';
import Header from './index.js';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
      <form className={css.form} method="post" enctype="multipart/form-data" action="a.html" autocomplete="off" >

        <h1 className={css.h1}>Matricular Professor</h1>

        <label for="ra" className={css.lbl}>RA</label>
        <br />
        <input id="ra" type="number" className={css.formInput} name="raAluno" min="" max="" required />
        <br />

        <label for="cpf" className={css.lbl}>CPF</label>
        <br />
        <input id="cpf" type="number" className={css.formInput} name="cpfAluno" min="" max="" required />
        <br />

        <label for="nome" className={css.lbl}>Nome</label>
        <br />
        <input id="nome" type="text" className={css.formInput} name="nomeAluno" maxlength="70" required />
        <br />

        <label for="nomesocial" className={css.lbl}>Nome Social</label>
        <br />
        <input id="nomesocial" type="text" className={css.formInput} name="nomeSocialAluno" maxlength="70" />
        <br />

        <label for="nascimento" className={css.lbl}>Data de Nascimento</label>
        <br />
        <input id="nascimento" type="date" className={css.formInput} name="nascimentoAluno" required />
        <br />

        <label for="email" className={css.lbl}>Email Pessoal</label>
        <br />
        <input id="email" type="email" className={css.formInput} name="emailAluno" required />
        <br />

        <label for="instituicao" className={css.lbl}>Instituição de Conclusão do 2º Grau</label>
        <br />
        <input id="instituicao" type="text" className={css.formInput} name="instituicaoAluno" required />
        <br />

        <label for="conclusao" className={css.lbl}>Ano de Conclusão</label>
        <br />
        <input id="conclusao" type="number" className={css.formInput} name="conclusaoAluno" required />
        <br />

        <label for="pontuacao" className={css.lbl}>Pontuação no Vestibular</label>
        <br />
        <input id="pontuacao" type="number" className={css.formInput} name="pontuacaoAluno" required />
        <br />

        <label for="posicao" className={css.lbl}>Posição no Vestibular</label>
        <br />
        <input id="posicao" type="number" className={css.formInput} name="posicaoAluno" required />
        <br />

        <label for="curso" className={css.lbl}>Curso</label>
        <br />
        <select id="curso" className={css.formInput} name="cursoAluno" required>
          <option value="" selected disabled hidden>Escolha o Curso</option>
          <option>Análise e Desenvolvimento de Sistemas</option>
          <option>Informática para Gestão de Negócios</option>
          <option>Comércio Exterior</option>
          <option>Desenvolvimento de Produtos Plásticos</option>
          <option>Desenvolvimento de Software Multiplataforma</option>
          <option>Gestão de Recursos Humanos</option>
          <option>Gestão Empresarial</option>
          <option>Gestão Empresarial EAD</option>
          <option>Logística</option>
          <option>Polímeros</option>
        </select>
        <br />

        <div className={css.center}>
          <input type="button" className={css.btn} value="Inserir" />
          <input type="button" className={css.btn} value="Atualizar" />
          <input type="button" className={css.btn} value="Deletar" />
        </div>

      </form >
    </>
  )
}
