package br.com.sigasoqbom.sigasoqbomsite.model;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "curso")
@Data
public class Curso {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long cod_curso;

	private String nome;
	private int cargaHoraria;
	private String sigla;
	private float enade;
	private String turno;

	@OneToMany(cascade = CascadeType.ALL, targetEntity = Disciplina.class, fetch = FetchType.LAZY)
	@JoinColumn(name = "cod_curso")
	private List<Disciplina> disciplinas;

}