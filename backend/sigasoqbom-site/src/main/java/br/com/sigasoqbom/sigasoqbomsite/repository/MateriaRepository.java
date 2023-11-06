package br.com.sigasoqbom.sigasoqbomsite.repository;

import br.com.sigasoqbom.sigasoqbomsite.model.Materia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MateriaRepository extends JpaRepository<Materia, Long> {
}
