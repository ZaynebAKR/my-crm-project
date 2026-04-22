package com.crm.backend.service;

import com.crm.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.crm.backend.model.User;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;
    private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public User register(User user){
        User existing = userRepository.findByUsername(user.getUsername());

        if(existing != null){
            throw new RuntimeException("Username already exists!");
        }

        user.setPassword(encoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public User login(String username, String password){
        User user = userRepository.findByUsername(username);

        System.out.println("USER FROM DB: " + user);

        if(user != null){
            System.out.println("Password match: " + encoder.matches(password, user.getPassword()));
        }

        if(user != null && encoder.matches(password, user.getPassword())){
            return user;
        }
        return null;
    }
}