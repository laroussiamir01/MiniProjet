package com.example.project_test.Controllers;

import com.example.project_test.Service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/users")
@CrossOrigin("*")
public class UserController {
    private UserService service;

    @GetMapping
    public String get(){
        return "GET:: user controller";
    }
    @PostMapping
    public String post(){
        return "POST:: user controller";
    }
    @PutMapping
    public String put(){
        return "PUT:: user controller";
    }
    @DeleteMapping
    public String delete(){
        return "DELETE:: user controller";
    }

    @PatchMapping
    public ResponseEntity<?> changePassword(@RequestBody changePasswordRequest request, Principal connectedUser){
service.changePassword(request, connectedUser);
return ResponseEntity.ok().build();

    }
}
