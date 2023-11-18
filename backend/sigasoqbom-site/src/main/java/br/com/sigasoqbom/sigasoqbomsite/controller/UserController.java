package br.com.sigasoqbom.sigasoqbomsite.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

import br.com.sigasoqbom.sigasoqbomsite.model.User;
import br.com.sigasoqbom.sigasoqbomsite.repository.UserRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("user")
public class UserController {

   @Autowired
   private UserRepository userRepository;

   @GetMapping
   public ResponseEntity<List<User>> getAllUsers() {
      List<User> users = userRepository.findAll();

      if (users.isEmpty()) {
         return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
      } else {
         return ResponseEntity.status(HttpStatus.OK).body(users);
      }
   }

   @PostMapping(consumes = "application/json")
   public ResponseEntity<User> createUser(@RequestBody User user) {
      User savedUser = userRepository.save(user);
      return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
   }

}