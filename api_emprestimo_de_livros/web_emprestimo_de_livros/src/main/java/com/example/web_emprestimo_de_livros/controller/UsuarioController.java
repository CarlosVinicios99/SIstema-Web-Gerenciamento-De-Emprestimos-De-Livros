package com.example.web_emprestimo_de_livros.controller;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.example.web_emprestimo_de_livros.model.Usuario;
import com.example.web_emprestimo_de_livros.service.UsuarioService;

@RestController
@RequestMapping("/usuario")
@CrossOrigin
public class UsuarioController {
	
	@Autowired
	private UsuarioService usuarioService;
	
	
	@PostMapping
	public ResponseEntity<Usuario> cadastrarUsuario(@RequestBody Usuario novoUsuario){
		novoUsuario = usuarioService.criarUsuario(novoUsuario);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(novoUsuario.getId()).toUri();
		return ResponseEntity.created(uri).body(novoUsuario);
	}
	
	@PostMapping("/login")
	public ResponseEntity<Usuario> obterUsuario(@RequestBody Usuario usuarioDTO) {
		Usuario obj = usuarioService.obterUsuario(usuarioDTO.getCpf(), usuarioDTO.getSenha());
		return ResponseEntity.ok().body(obj);		
	}
	
	@GetMapping("/cpf")
	public ResponseEntity<Usuario> obterUsuario(@RequestParam String cpf){
		Usuario obj = usuarioService.obterUsuario(cpf);
		return ResponseEntity.ok().body(obj);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Usuario> removerUsuario(@PathVariable Long id){
		usuarioService.removerUsuario(id);
		return ResponseEntity.ok().build();
	}
}
