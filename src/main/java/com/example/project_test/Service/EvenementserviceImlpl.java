package com.example.project_test.Service;

import com.example.project_test.Entities.Etudiant;
import com.example.project_test.Entities.Evenement;
import com.example.project_test.repository.EtudiantRepository;
import com.example.project_test.repository.EvenementRepository;
import jakarta.mail.*;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeMessage;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Properties;
import java.util.Set;


@Service
@AllArgsConstructor
public class EvenementserviceImlpl implements IEvenementService{
    EtudiantRepository etudiantRepository;
    EvenementRepository evenementRepository;

    @Override
    public Evenement addEvenement(Evenement evenement) {

        Evenement savedEvenement = evenementRepository.save(evenement);
        List<Etudiant> etudiants = etudiantRepository.findAll();
        sendEmailToEtudiant(etudiants, savedEvenement);

        return savedEvenement;

    }

    @Override
    public Evenement getEvenement(long idEvenement) {
        return evenementRepository.findById(idEvenement).orElse(null);
    }

    @Override
    public List<Evenement> getAllEvenements() {
        return evenementRepository.findAll();
    }

    @Override
    public void deleteEvenement(long idEvenement) {
        Evenement evenement = evenementRepository.findById(idEvenement).orElse(null);
            Set<Etudiant> etudiants = evenement.getEtudiants();

            for (Etudiant etudiant : etudiants) {
                etudiant.getEvenements().remove(evenement);
            }

            evenement.getEtudiants().clear();
            evenementRepository.save(evenement);
            evenementRepository.deleteById(evenement.getIdEvenement());

    }

    @Override
    public Evenement updateEvenement(Evenement evenement) {
        Evenement evenement1= evenementRepository.findById(evenement.getIdEvenement()).orElseThrow(() -> new EntityNotFoundException("No Bloc with id " + evenement.getIdEvenement() + " was found!"));
        if (evenement1!=null){
            evenementRepository.save(evenement);}
        return evenement1;
    }

    @Override
    public List<Evenement> findByDateFinBefore(Date endDate) {
      return evenementRepository.findByDateFinBefore(endDate);

    }

    @Override
    public long countByDateFinBefore(Date endDate) {
        return evenementRepository.countByDateFinBefore(endDate);
    }

    @Override
    public Evenement getEvenementByTitre(String titre) {
        return evenementRepository.findByTitre(titre);
    }

    @Override
    public List<Evenement> findByEtudiantsCin(long cin) {
        return evenementRepository.findByEtudiantsCin(cin);
    }

    @Override
    public List<Evenement> findByEtudiantsNomEt(String nom) {
        return evenementRepository.findByEtudiantsNomEt(nom);
    }

    @Override
    public List<Evenement> findByEtudiantsEcole(String ecole) {
        return evenementRepository.findByEtudiantsEcole(ecole);
    }

    @Override
    public List<Evenement> findByEtudiantsIdEtudiant(long idEtudiant) {
        return evenementRepository.findByEtudiantsIdEtudiant(idEtudiant);
    }


    @Transactional
    @Scheduled(fixedRate = 12000000)
    //fixedDelay
    //cron
    @Override
    public void deleteExpiredEvents() {
        Date currentDate = new Date();
        List<Evenement> evenements = evenementRepository.findByDateFinBefore(currentDate);

        for (Evenement evenement : evenements) {
            Set<Etudiant> etudiants = evenement.getEtudiants();

            for (Etudiant etudiant : etudiants) {
                etudiant.getEvenements().remove(evenement);
            }

            evenement.getEtudiants().clear();
            evenementRepository.save(evenement);
            evenementRepository.deleteById(evenement.getIdEvenement());
        }
    }


    public void sendEmailToEtudiant(List<Etudiant>etudiants, Evenement evenement) {
        // Sender's email information
        String senderEmail = "amir.laroussi@esprit.tn";
        String senderPassword = "aney avyr jedz ogti";



        // Email subject
        String subject = "New Event Added";

        // Email body
        String body = "A new event has been added get ready:\n\n" +
                "Event Title: " + evenement.getTitre() + "\n" +
                "Event Description: " + evenement.getDescription() + "\n" +
                "Event Starting Date : " + evenement.getDateDebut() + "\n" +
                "Event Ending Date: " + evenement.getDateFin() + "\n" +
                "Event Space Available: " + evenement.getPlaceDisponible() + "\n";

        // SMTP server configuration
        String host = "smtp.gmail.com";
        int port = 587;

        // Create properties object for the SMTP server
        Properties properties = new Properties();
        properties.put("mail.smtp.auth", "true");
        properties.put("mail.smtp.starttls.enable", "true");
        properties.put("mail.smtp.host", host);
        properties.put("mail.smtp.port", port);

        // Create a session with the SMTP server
        Session session = Session.getInstance(properties, new Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(senderEmail, senderPassword);
            }
        });

        try {
            for (Etudiant etudiant : etudiants) {
                // Create a MimeMessage object for each student
                MimeMessage message = new MimeMessage(session);

                // Set the sender address
                message.setFrom(new InternetAddress(senderEmail));

                // Set the recipient address
                message.addRecipient(Message.RecipientType.TO, new InternetAddress(etudiant.getEmail()));

                // Set the subject
                message.setSubject(subject);

                // Set the body
                message.setText(body);

                // Send the email
                Transport.send(message);

                System.out.println("Email sent successfully to: " + etudiant.getEmail());
            }
        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }







}
