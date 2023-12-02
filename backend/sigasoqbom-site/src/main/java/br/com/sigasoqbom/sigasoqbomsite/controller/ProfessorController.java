package br.com.sigasoqbom.sigasoqbomsite.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import br.com.sigasoqbom.sigasoqbomsite.model.Professor;
import br.com.sigasoqbom.sigasoqbomsite.model.User;
import br.com.sigasoqbom.sigasoqbomsite.repository.ProfessorRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("professor")
public class ProfessorController {

   @Autowired
   private ProfessorRepository professorRepository;

   @GetMapping
   public ResponseEntity<List<Professor>> getAllProfessores() {
      List<Professor> professores = professorRepository.findAll();

      if (professores.isEmpty()) {
         return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
      } else {
         return ResponseEntity.status(HttpStatus.OK).body(professores);
      }
   }

   @GetMapping("/bycpf")
   public ResponseEntity<List<Professor>> getByCPF(@RequestParam String cpf) {
      List<Professor> professores = professorRepository.findByCpf(cpf);

      if (professores.isEmpty()) {
         return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
      } else {
         return ResponseEntity.status(HttpStatus.OK).body(professores);
      }
   }

   @PostMapping(consumes = "application/json")
   public ResponseEntity<Professor> createProfessor(@RequestBody Professor professor) {
      Professor savedProfessor = professorRepository.save(professor);
      return ResponseEntity.status(HttpStatus.CREATED).body(savedProfessor);
   }

}
