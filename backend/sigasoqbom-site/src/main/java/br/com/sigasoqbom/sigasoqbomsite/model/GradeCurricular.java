package br.com.sigasoqbom.sigasoqbomsite.model;

import java.time.LocalDate;
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
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "grade_curricular")
@Inheritance(strategy = InheritanceType.JOINED)
@Data
public class GradeCurricular {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long cod_grade;

	private LocalDate data;
	
	@OneToMany(cascade = CascadeType.ALL, targetEntity = Materia.class, fetch = FetchType.LAZY)
	@JoinColumn(name = "cod_grade")
	private List<Materia> materias;
}
