package br.com.sigasoqbom.sigasoqbomsite.model;

import java.sql.Time;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
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
	
	@ManyToOne
	private Disciplina disciplina;
	
	@ManyToOne
	private Professor professor;
	
	private Time horarioInicio;
	private Time horarioFim;
	
	@OneToMany(cascade = CascadeType.ALL, targetEntity = Matricula.class, fetch = FetchType.LAZY)
	@JoinColumn(name = "cod_materia")
	private List<Matricula> matriculas;

	@OneToMany(cascade = CascadeType.ALL, targetEntity = Chamada.class, fetch = FetchType.LAZY)
	@JoinColumn(name = "cod_materia")
	private List<Chamada> chamadas;
}
