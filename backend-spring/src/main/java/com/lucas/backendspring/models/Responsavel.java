package com.lucas.backendspring.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Responsavel {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    @Column(length = 200, nullable = false)
    private String nome;
    
    @Column(length = 200, nullable = false)
    private String email;
    
    @Column(length = 14, nullable = false)
    private String cpf;
}
