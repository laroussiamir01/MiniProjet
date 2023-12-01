package com.example.project_test;

import com.example.project_test.Entities.Etudiant;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonNode;

import java.io.IOException;

public class EtudiantDeserializer extends JsonDeserializer<Etudiant> {
    @Override
    public Etudiant deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException {
        JsonNode node = jsonParser.getCodec().readTree(jsonParser);

        // Extraire les valeurs du nœud JSON et créer une instance d'Etudiant en utilisant ces valeurs

        // Exemple :
        long idEtudiant = node.get("idEtudiant").asLong();
        String nomEt = node.get("nomEt").asText();
        String prenomEt = node.get("prenomEt").asText();
        long cin= node.get("cin").asLong();
        String ecole = node.get("ecole").asText();
        String email = node.get("email").asText();
        // ...

        Etudiant etudiant = new Etudiant();
        etudiant.setIdEtudiant(idEtudiant);
        etudiant.setNomEt(nomEt);
        etudiant.setPrenomEt(prenomEt);
        etudiant.setCin(cin);
        etudiant.setEcole(ecole);
        etudiant.setEmail(email);
        // ...

        return etudiant;
    }
}