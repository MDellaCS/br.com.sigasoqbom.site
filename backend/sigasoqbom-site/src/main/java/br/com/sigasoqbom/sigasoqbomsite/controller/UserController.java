package br.com.sigasoqbom.sigasoqbomsite.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.sigasoqbom.sigasoqbomsite.model.User;
import br.com.sigasoqbom.sigasoqbomsite.repository.UserRepository;

@RestController
@RequestMapping("user")
public class UserController {

   @Autowired
   private UserRepository userRepository;

   @GetMapping
   public ResponseEntity<String> getAll() {
      return ResponseEntity.status(HttpStatus.OK).body("Alo User API");
   }

   @PostMapping(consumes = "application/json")
   public ResponseEntity<User> createUser(@RequestBody User user) {
      User savedUser = userRepository.save(user);
      return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
   }

}