package com.lucas.backendspring.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/HelloWorld")
public class HelloWorldController {
    
    @GetMapping
    public String HelloWord() {
        return "Hello World!";
    }
}
