package br.com.sigasoqbom.sigasoqbomsite.model;

import java.util.List;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "matricula")
@Inheritance(strategy = InheritanceType.JOINED)
@Data
public class Matricula {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long cod_matricula;

	private double notaFinal;
	private int ano;
	private int semestre;
	private String situacao;
	private boolean aprovado;
}
