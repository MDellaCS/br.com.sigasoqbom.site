package br.com.sigasoqbom.sigasoqbomsite.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "chamada")
@Data
public class Chamada {
	 
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long cod_chamada;
	
	private int quantidadeFaltas;
	private LocalDate dataRealizada;

}
