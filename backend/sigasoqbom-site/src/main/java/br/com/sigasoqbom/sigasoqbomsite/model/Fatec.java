package br.com.sigasoqbom.sigasoqbomsite.model;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Entity
@DiscriminatorValue("aluno")
@Data
public class Fatec {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long cod_fatec;
	
	@OneToMany(cascade = CascadeType.ALL, targetEntity = Curso.class, fetch = FetchType.LAZY)
	@JoinColumn(name = "cod_fatec")
	private List<Curso> cursos;

	@OneToMany(cascade = CascadeType.ALL, targetEntity = Professor.class, fetch = FetchType.LAZY)
	@JoinColumn(name = "cod_fatec")
	private List<Professor> professores;
}
