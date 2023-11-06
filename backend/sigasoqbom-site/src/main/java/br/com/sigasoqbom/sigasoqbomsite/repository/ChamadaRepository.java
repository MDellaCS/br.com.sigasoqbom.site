package br.com.sigasoqbom.sigasoqbomsite.repository;

import br.com.sigasoqbom.sigasoqbomsite.model.Chamada;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChamadaRepository extends JpaRepository<Chamada, Long> {
}
