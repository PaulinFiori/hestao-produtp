package br.back.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.back.back.model.Cidade;

@Repository
public interface CidadeRepository extends JpaRepository<Cidade, Long> {
} 