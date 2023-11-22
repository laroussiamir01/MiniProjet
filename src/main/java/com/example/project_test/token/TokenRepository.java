package com.example.project_test.token;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface TokenRepository extends JpaRepository<Token,Integer> {

    @Query(value = """
      select t from Token t inner join Etudiant u\s
      on t.user.idEtudiant = u.idEtudiant\s
      where u.idEtudiant = :userId and (t.expired = false or t.revoked = false)\s
      """)
    List<Token> findAllValidTokensByUser(long userId);

    Optional<Token> findByToken(String token);
}
