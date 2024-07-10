-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

DROP DATABASE projetoindividual;
CREATE DATABASE projetoindividual;
USE projetoindividual;


CREATE TABLE idolo (
    idIdolo INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45)
);

INSERT INTO idolo (nome) VALUES ('Rogério Ceni'), ('Calleri'), ('Raí'), ('Telê Santana'), ('Lucas');

CREATE TABLE usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    email VARCHAR(50),
    senha VARCHAR(50),
    fk_idolo INT,
    FOREIGN KEY (fk_idolo) REFERENCES idolo(idIdolo)
);

CREATE TABLE quiz (
    idQuiz INT PRIMARY KEY AUTO_INCREMENT,
    respostascertas INT NOT NULL, 
    respostaserradas INT NOT NULL,
    fk_usuario INT,
    FOREIGN KEY (fk_usuario) REFERENCES usuario(idUsuario)
);

CREATE TABLE aviso (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100),
    descricao VARCHAR(150),
    fk_usuario INT,
    FOREIGN KEY (fk_usuario) REFERENCES usuario(idUsuario)
);


SELECT * FROM idolo;
SELECT * FROM usuario;
SELECT * FROM quiz;