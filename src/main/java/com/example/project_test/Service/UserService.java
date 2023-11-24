package com.example.project_test.Service;

import com.example.project_test.Controllers.changePasswordRequest;
import com.example.project_test.Entities.Etudiant;
import com.example.project_test.repository.EtudiantRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.Principal;

@Service
@RequiredArgsConstructor
public class UserService {
    private final PasswordEncoder passwordEncoder;
    private final EtudiantRepository repository;
    public void changePassword(changePasswordRequest request, Principal connectedUser){
        var user= (Etudiant) ((UsernamePasswordAuthenticationToken) connectedUser).getPrincipal();

        //check password correct?
        if(!passwordEncoder.matches(request.getCurrentPassword(),user.getPassword())){
            throw new IllegalStateException("mdp incorrecte");
        }
        //check the 2 new passwords matches ?
        if (!request.getNewPassword().equals(request.getConfirmationPassword())){
            throw new IllegalStateException("mdp non confirmee");
        }
        //update mdp
        user.setPassword(passwordEncoder.encode(request.getNewPassword()));
        //save mdp
        repository.save(user);


    }
}
