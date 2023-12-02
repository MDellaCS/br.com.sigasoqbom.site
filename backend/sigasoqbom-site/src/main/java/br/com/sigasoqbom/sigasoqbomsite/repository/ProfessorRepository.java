package br.com.sigasoqbom.sigasoqbomsite.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.sigasoqbom.sigasoqbomsite.model.Professor;

import org.springframework.stereotype.Repository;

@Repository
public interface ProfessorRepository extends JpaRepository<Professor, String> {
   List<Professor> findByCpf(String cpf);
}