package br.com.sigasoqbom.sigasoqbomsite.model;

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

	@OneToMany(cascade = CascadeType.ALL, targetEntity = Matricula.class, fetch = FetchType.LAZY)
	@JoinColumn(name = "cod_disciplina")
	private List<Matricula> matriculas;
	
	@OneToMany(cascade = CascadeType.ALL, targetEntity = Materia.class, fetch = FetchType.LAZY)
	@JoinColumn(name = "cod_disciplina")
	private List<Materia> materias;
    
}