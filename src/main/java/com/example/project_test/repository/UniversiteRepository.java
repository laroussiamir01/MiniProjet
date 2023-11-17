package com.example.project_test.repository;

import com.example.project_test.Entities.Bloc;
import com.example.project_test.Entities.Universite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UniversiteRepository extends JpaRepository<Universite, Long> {
    // requete JPQL
    @Query("select u FROM Universite u where u.nomUniversite=:nomU")
    Universite retrieveByNom(@Param("nomU") String nomUni);

    @Query(value= "select * FROM universite u where u.nom_universite=:nom",nativeQuery = true)
    Universite retrieveByNomSQL(@Param("nom") String nomUni);


    //JPQL keyword
    //findBy == @Query("select u FROM Universite
    //findByNomUniversite ==   @Query("select u FROM Universite u where u.nomUniversite=:nomU")
    //findByEsmAttribue w lettre loula rodha majuscule
    Universite findByNomUniversite(String nom);
    Universite findByAdresseContaining(String adr);
}
