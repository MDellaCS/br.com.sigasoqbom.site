package br.com.sigasoqbom.sigasoqbomsite.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDate;
import java.util.List;

@Entity
@DiscriminatorValue("aluno")
@Data
public class Aluno {

	@Id
	@Column(name = "ra", unique = true)
	private String ra;

	@Column(name = "cpf", unique = true)
	private String cpf;

	private String nome;
	private LocalDate dataNascimento;
	private String nomeSocial;
	private String emailInstitucional;
	private LocalDate dataConclusao2grau;
	private String instituicaoConclusao2grau;
	private int pontuacaoVestibular;
	private int posicaoVestibular;
	private LocalDate dataMatricula;
	private LocalDate dataLimiteMatricula;

	@ManyToOne
	private Curso curso;

	@OneToMany(cascade = CascadeType.ALL, targetEntity = Matricula.class, fetch = FetchType.LAZY)
	@JoinColumn(name = "ra")
	private List<Matricula> matriculas;

	@OneToMany(cascade = CascadeType.ALL, targetEntity = Chamada.class, fetch = FetchType.LAZY)
	@JoinColumn(name = "ra")
	private List<Chamada> chamadas;

}