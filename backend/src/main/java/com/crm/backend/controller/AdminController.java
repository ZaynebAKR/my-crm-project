package com.crm.backend.controller;

import com.crm.backend.dto.StatsDTO;
import com.crm.backend.dto.UserDTO;
import com.crm.backend.model.Role;
import com.crm.backend.model.User;
import com.crm.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:4200")
public class AdminController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/stats")
    public StatsDTO getStats() {
        List<User> users = userRepository.findAll();

        users.forEach(u ->
                System.out.println(u.getUsername() + " -> " + u.getRole())
        );

        long clients = users.stream()
                .filter(u -> u.getRole() == Role.CLIENT)
                .count();

        long vendors = users.stream()
                .filter(u -> u.getRole() == Role.PARTENAIRES_COMMERCIAUX)
                .count();

        return new StatsDTO(clients, vendors, users.size(), 0);
    }

    @GetMapping("/users")
    public List<UserDTO> getUsers() {
        return userRepository.findAll()
                .stream()
                .map(u -> new UserDTO(
                        u.getId(),
                        u.getUsername(),
                        u.getRole().name()
                ))
                .toList();
    }
}