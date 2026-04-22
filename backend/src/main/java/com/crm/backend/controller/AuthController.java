package com.crm.backend.controller;

import com.crm.backend.dto.AuthResponse;
import com.crm.backend.dto.StatsDTO;
import com.crm.backend.model.Role;
import com.crm.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.crm.backend.model.User;
import com.crm.backend.service.AuthService;

import java.util.List;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user){
        try {
            return ResponseEntity.ok(authService.register(user));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user){
        User loggedUser = authService.login(user.getUsername(), user.getPassword());

        if(loggedUser != null){
            AuthResponse response = new AuthResponse(
                    loggedUser.getUsername(),
                    loggedUser.getRole().name()
            );
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("Invalid username or password");
        }
    }

}