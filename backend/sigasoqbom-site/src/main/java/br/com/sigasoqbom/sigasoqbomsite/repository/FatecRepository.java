package br.com.sigasoqbom.sigasoqbomsite.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.sigasoqbom.sigasoqbomsite.model.Fatec;
import org.springframework.stereotype.Repository;

@Repository
public interface FatecRepository extends JpaRepository<Fatec, Long> {

}
