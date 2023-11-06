package br.com.sigasoqbom.sigasoqbomsite.model;

import java.sql.Time;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "materia")
@Inheritance(strategy = InheritanceType.JOINED)
@Data
public class Materia {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long cod_materia;
	
	private Semana semana;
	private Time horarioComeco;
	private Time horarioFim;
}
