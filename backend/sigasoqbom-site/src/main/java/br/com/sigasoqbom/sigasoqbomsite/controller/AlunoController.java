package br.com.sigasoqbom.sigasoqbomsite.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("alunos")
public class AlunoController {

    @GetMapping
    public ResponseEntity<String> getAll() {
        return ResponseEntity.status(HttpStatus.OK).body("8adasdu8a9");
    }
}
