-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE projetoindividualblogtricolor;

USE projetoindividualblogtricolor;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

create table quiz (
idQuiz int primary key auto_increment,
respostascertas int not null, 
respostaserradas int not null,
fk_usuario INT,
FOREIGN KEY (fk_usuario) REFERENCES usuario(idUsuario)
);
