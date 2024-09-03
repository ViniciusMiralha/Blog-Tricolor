
 -- DROP DATABASE projetoindividual;
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

CREATE VIEW vw_dados_completos AS
SELECT 
    u.idUsuario,
    u.nome AS "Nome Do Usuario",
    u.email AS "Email",
    i.nome AS "Idolo",
    q.respostascertas AS "Respostas Certas",
    q.respostaserradas AS "Respostas Erradas",
    a.titulo AS "Titulo",
    a.descricao AS "Descrição"
FROM 
    usuario u
LEFT JOIN 
    idolo i ON u.fk_idolo = i.idIdolo
LEFT JOIN 
    quiz q ON u.idUsuario = q.fk_usuario
LEFT JOIN 
    aviso a ON u.idUsuario = a.fk_usuario;

SELECT * FROM vw_dados_completos;


