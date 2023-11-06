package br.com.sigasoqbom.sigasoqbomsite.model;

public enum Semana {
	DOMINGO("Domingo"),
	SEGUNDA("Segunda-feira"), 
	TERCA("Terça-feira"), 
	QUARTA("Quarta-feira"), 
	QUINTA("Quinta-feira"),
	SEXTA("Sexta-feira"), 
	SABADO("Sábado");

	private String nome;

	private Semana(String nome) {
		this.nome = nome;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}
}
