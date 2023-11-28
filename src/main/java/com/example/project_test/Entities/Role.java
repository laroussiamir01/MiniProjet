package com.example.project_test.Entities;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import static com.example.project_test.Entities.Permission.*;

@RequiredArgsConstructor
public enum Role {
    USER(Set.of(
            USER_READ,
            USER_DELETE,
            USER_UPDATE,
            USER_CREATE,
            USER_PATCH


    )),
    ADMIN(Set.of(
            ADMIN_READ,
            ADMIN_DELETE,
            ADMIN_UPDATE,
            ADMIN_CREATE,
            USER_READ,
            USER_DELETE,
            USER_UPDATE,
            USER_CREATE,
            ADMIN_PATCH,
            USER_PATCH

           )
    )
    ;
    @Getter
    private final Set<Permission> permissions;

    public List<SimpleGrantedAuthority> getAuthorities(){
        var authorities = getPermissions()
                .stream()
                .map(permission -> new SimpleGrantedAuthority(permission.getPermission()))
                .collect(Collectors.toList());
        authorities.add(new SimpleGrantedAuthority("ROLE_" + this.name()));
        return authorities;
    }
}
