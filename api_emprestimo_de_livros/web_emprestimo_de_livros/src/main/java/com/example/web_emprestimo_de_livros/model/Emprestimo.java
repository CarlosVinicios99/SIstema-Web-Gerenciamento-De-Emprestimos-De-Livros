package com.example.web_emprestimo_de_livros.model;

import java.util.Date;

public class Emprestimo {
	
	private Long id;
	
	private Livro livro;
	
	private Date dataInicial;
	
	private Date dataFinal;
	
	public Emprestimo() {
		
	}
	
	public Emprestimo(Long id, Livro livro, Date dataInicial, Date dataFinal) {
		super();
		this.id = id;
		this.livro = livro;
		this.dataInicial = dataInicial;
		this.dataFinal = dataFinal;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Livro getLivro() {
		return livro;
	}

	public void setLivro(Livro livro) {
		this.livro = livro;
	}

	public Date getDataInicial() {
		return dataInicial;
	}

	public void setDataInicial(Date dataInicial) {
		this.dataInicial = dataInicial;
	}

	public Date getDataFinal() {
		return dataFinal;
	}

	public void setDataFinal(Date dataFinal) {
		this.dataFinal = dataFinal;
	}
	
}
