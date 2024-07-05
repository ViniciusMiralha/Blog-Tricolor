-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/
drop database projetoindividual;
create database projetoindividual;
USE projetoindividual;

create table idolo (
idIdolo INT PRIMARY KEY AUTO_INCREMENT,
nome varchar(45)
);

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
    fk_idolo INT,
	FOREIGN KEY (fk_idolo) REFERENCES idolo(idIdolo)
);

create table quiz (
idQuiz int primary key auto_increment,
respostascertas int not null, 
respostaserradas int not null,
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

insert into idolo (nome) values ('Rogério Ceni');
insert into idolo (nome) values ('Calleri');
insert into idolo (nome) values ('Raí');
insert into idolo (nome) values ('Telê Santana');
insert into idolo (nome) values ('Lucas');

select * from idolo;
select * from usuario;
select * from quiz;
