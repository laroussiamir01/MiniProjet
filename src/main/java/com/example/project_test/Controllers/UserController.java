package com.example.project_test.Controllers;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/user")
@CrossOrigin("*")
public class UserController {
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
}
