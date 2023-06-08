package com.example.web_emprestimo_de_livros.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.web_emprestimo_de_livros.model.Bibliotecario;
import com.example.web_emprestimo_de_livros.service.BibliotecarioService;

@RestController
@RequestMapping("/bibliotecario")
@CrossOrigin
public class BibliotecarioController {
	
	@Autowired
	private BibliotecarioService bibliotecarioService;
	
	
	@GetMapping
	public ResponseEntity<Bibliotecario> obterBibliotecario(@RequestParam String cpf, @RequestParam String senha) {
		Bibliotecario obj = bibliotecarioService.obterBibliotecario(cpf, senha);
		return ResponseEntity.ok().body(obj);		
	}
	
}
