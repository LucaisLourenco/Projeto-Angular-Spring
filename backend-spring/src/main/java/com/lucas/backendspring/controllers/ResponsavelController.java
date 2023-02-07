package com.lucas.backendspring.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lucas.backendspring.models.Responsavel;
import com.lucas.backendspring.repository.ResponsavelRepository;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/responsaveis")
@AllArgsConstructor
public class ResponsavelController {

    private final ResponsavelRepository responsavelRepository;

    @GetMapping
    public List<Responsavel> list() {
        return responsavelRepository.findAll();
    }

}
