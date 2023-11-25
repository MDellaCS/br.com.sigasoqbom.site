package br.com.sigasoqbom.sigasoqbomsite.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "disciplina")
@Inheritance(strategy = InheritanceType.JOINED)
@Data
public class Disciplina {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long cod_disciplina;

	private String nome;

	private int qtdHorasSemanais;
	private int semestre;
}