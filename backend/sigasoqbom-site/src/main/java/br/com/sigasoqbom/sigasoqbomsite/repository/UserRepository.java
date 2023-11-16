package br.com.sigasoqbom.sigasoqbomsite.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User save(User user);

    Optional<User> findById(Long id);

    List<User> findAll();

    long count();

    void deleteById(Long id);

    void delete(User user);

    boolean existsById(Long id);

    boolean existsAllByIdIn(Iterable<Long> ids);

    Optional<User> findByUsername(String username);

}
