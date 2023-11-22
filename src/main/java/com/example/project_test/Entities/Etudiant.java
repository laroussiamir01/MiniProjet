package com.example.project_test.Entities;

import com.example.project_test.token.Token;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.io.Serializable;
import java.util.*;


@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Etudiant implements Serializable, UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idEtudiant;
    private String nomEt;
    private String prenomEt;
    private long cin;
    private String ecole;
    private String email;
    private String password;
    @Enumerated(EnumType.STRING)
    private Role role;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date dateNaissance;
    @ManyToMany
    @Column(nullable = false)
    private Set<Reservation> reservations= new HashSet<>();
    //reservation= fils et etudiant= parent
    @ManyToMany
    @Column(nullable = false)
    private Set<Evenement> evenements= new HashSet<>();
    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private List<Token> tokens;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
      //  return List.of(new SimpleGrantedAuthority(role.name()));
        return role.getAuthorities();
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
    //evenement= fils et etudiant= parent

}
