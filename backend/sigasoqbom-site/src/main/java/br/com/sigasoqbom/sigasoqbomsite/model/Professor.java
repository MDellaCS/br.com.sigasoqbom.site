package br.com.sigasoqbom.sigasoqbomsite.model;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Entity
@DiscriminatorValue("professor")
@Data
public class Professor {

	@Id	
	@Column(name = "cpf", unique = true)
	private String cpf;
	
	private String nome;
	private String dataNascimento;
	private String emailCorporativo;
	private String cargo;
	
	@OneToMany(cascade = CascadeType.ALL, targetEntity = Materia.class, fetch = FetchType.LAZY)
	@JoinColumn(name = "cpf_professor")
	private List<Materia> materias;
}
