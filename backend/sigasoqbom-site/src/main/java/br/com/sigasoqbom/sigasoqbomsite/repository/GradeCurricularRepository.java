package br.com.sigasoqbom.sigasoqbomsite.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.sigasoqbom.sigasoqbomsite.model.GradeCurricular;
import org.springframework.stereotype.Repository;

@Repository
public interface GradeCurricularRepository extends JpaRepository<GradeCurricular, Long> {

}
