package com.example.web_emprestimo_de_livros.dto;

public class EmprestimoDTO {
	
	private Long idLivro;
	private Long idUsuario;
	
	public EmprestimoDTO() {
		
	}
	
	public EmprestimoDTO(Long idLivro, Long idUsuario) {
		this.idLivro = idLivro;
		this.idUsuario = idUsuario;
	}

	public Long getIdLivro() {
		return idLivro;
	}

	public void setIdLivro(Long idLivro) {
		this.idLivro = idLivro;
	}

	public Long getIdUsuario() {
		return idUsuario;
	}

	public void setIdUsuario(Long idUsuario) {
		this.idUsuario = idUsuario;
	}
	

}
