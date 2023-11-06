package br.com.sigasoqbom.sigasoqbomsite.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.sigasoqbom.sigasoqbomsite.model.Disciplina;
import org.springframework.stereotype.Repository;

@Repository
public interface DisciplinaRepository extends JpaRepository<Disciplina, Long>{

}
