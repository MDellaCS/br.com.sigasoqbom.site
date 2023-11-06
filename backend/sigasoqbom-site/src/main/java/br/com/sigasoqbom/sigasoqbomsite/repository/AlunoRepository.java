package br.com.sigasoqbom.sigasoqbomsite.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.sigasoqbom.sigasoqbomsite.model.Aluno;
import org.springframework.stereotype.Repository;

@Repository
public interface AlunoRepository extends JpaRepository<Aluno, String> {
}
