package com.example.web_emprestimo_de_livros.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.web_emprestimo_de_livros.model.Usuario;
import com.example.web_emprestimo_de_livros.service.UsuarioService;

@RestController
@RequestMapping("/usuario")
@CrossOrigin
public class UsuarioController {
	
	@Autowired
	private UsuarioService usuarioService;
	
	
	@GetMapping
	public ResponseEntity<Usuario> obterUsuario(@RequestParam String cpf, @RequestParam String senha) {
		Usuario obj = usuarioService.obterUsuario(cpf, senha);
		return ResponseEntity.ok().body(obj);		
	}
	
}
