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

	@OneToMany(cascade = CascadeType.ALL, targetEntity = Chamada.class, fetch = FetchType.LAZY)
	@JoinColumn(name = "cod_matricula")
	private List<Chamada> chamadas;

	private Double nota;

}
