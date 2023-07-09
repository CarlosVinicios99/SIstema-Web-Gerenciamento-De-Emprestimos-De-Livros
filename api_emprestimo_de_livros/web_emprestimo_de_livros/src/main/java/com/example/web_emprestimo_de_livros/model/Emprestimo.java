package com.example.web_emprestimo_de_livros.model;

import java.util.Date;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "emprestimos")
public class Emprestimo {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@OneToOne(cascade = CascadeType.DETACH)
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
	
	public Emprestimo(Livro livro) {
		super();
		this.livro = livro;
		definirDatas();
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
	
	private void definirDatas(){
		Long diaEmMilissegundos = 24 * 60 * 60 * 1000L;
        Long tempoEmprestimo = 7 * diaEmMilissegundos;
		this.dataInicial = new Date();
		this.dataFinal = new Date(this.dataInicial.getTime() + tempoEmprestimo);
	}
	
}
