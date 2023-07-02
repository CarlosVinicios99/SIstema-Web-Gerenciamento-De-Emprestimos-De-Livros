package com.example.web_emprestimo_de_livros.controller;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.example.web_emprestimo_de_livros.dto.EmprestimoDTO;
import com.example.web_emprestimo_de_livros.model.Emprestimo;
import com.example.web_emprestimo_de_livros.service.EmprestimoService;

@RestController
@CrossOrigin
@RequestMapping("/emprestimos")
public class EmprestimoController {
	
	@Autowired
	private EmprestimoService emprestimoService;
	
	@PostMapping
	public ResponseEntity<Emprestimo> registrarEmprestimo(@RequestBody EmprestimoDTO emprestimoDTO) {
		Emprestimo novoEmprestimo = emprestimoService.registrarEmprestimo(emprestimoDTO);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(novoEmprestimo.getId()).toUri();
		return ResponseEntity.created(uri).body(novoEmprestimo);
	}
	
}
