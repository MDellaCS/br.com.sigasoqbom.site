package br.com.sigasoqbom.sigasoqbomsite.model;

import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@DiscriminatorValue("planejamento")
@Data
public class Planejamento {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long cod_planejamento;
	
	private String aula;
	private LocalDate dataPlanejamento;
}
