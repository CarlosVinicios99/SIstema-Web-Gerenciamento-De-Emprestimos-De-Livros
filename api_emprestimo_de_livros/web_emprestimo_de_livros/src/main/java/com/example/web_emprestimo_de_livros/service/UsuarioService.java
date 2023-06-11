package com.example.web_emprestimo_de_livros.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.web_emprestimo_de_livros.model.Usuario;
import com.example.web_emprestimo_de_livros.repository.UsuarioRepository;

@Service
public class UsuarioService {
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	
	public Usuario criarUsuario(Usuario novoUsuario) {
		return usuarioRepository.save(novoUsuario);
	}
	
	public Usuario obterUsuario(String cpf, String senha) {
		Usuario usuarioBuscado = usuarioRepository.findByCpf(cpf);
		
		if(usuarioBuscado != null) {
			String senhaBuscada = usuarioBuscado.getSenha();
			return senhaBuscada.equals(senha) ? usuarioBuscado : null;
		}
		return null;
	}
	
	public Usuario obterUsuario(String cpf) {
		return  usuarioRepository.findByCpf(cpf);
	}
	
	public void removerUsuario(Long id) {
		usuarioRepository.deleteById(id);
		
	}
	
}
