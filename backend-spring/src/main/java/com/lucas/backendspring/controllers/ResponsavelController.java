package com.lucas.backendspring.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
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

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Responsavel create(@RequestBody Responsavel responsavel) {
        return responsavelRepository.save(responsavel);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Responsavel> findById(@PathVariable Long id) {
        return responsavelRepository.findById(id)
        .map(responsavel -> ResponseEntity.ok(responsavel))
        .orElse(ResponseEntity.notFound().build());
    } 

}
