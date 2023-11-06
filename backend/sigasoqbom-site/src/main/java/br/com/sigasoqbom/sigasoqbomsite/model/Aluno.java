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
	
	// dados a normalizar
	private String rg;
	private String cretificadoMilitar;
	private String endereco;
	private String etnia;
	
	private boolean pcd;
	private String descricaoPcd;
	
	private String nome;
	private String dataNascimento;
	private String emailCorporativo;
	private String nomeSocial;
	private String emailPessoal;
	
	private String dataConclusao2grau;
	private String instituicaoConclusao2grau;
	private int pontuacaoVestibular;
	private int posicaoVestibular;
	private LocalDate dataIngresso;

	
	@OneToMany(cascade = CascadeType.ALL, targetEntity = Matricula.class, fetch = FetchType.LAZY)
	@JoinColumn(name = "ra")
	private List<Matricula> matriculas;
}