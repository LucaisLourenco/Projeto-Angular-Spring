package com.lucas.backendspring.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lucas.backendspring.models.Responsavel;

public interface ResponsavelRepository extends JpaRepository<Responsavel, Long> {
    
}
