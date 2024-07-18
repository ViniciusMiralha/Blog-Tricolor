// const { quizatual } = require("../controllers/usuarioController");
var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT idUsuario, nome, email, fk_idolo as idIdolo FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha, idIdolo) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    // adição da fk_idolo ao insert de valores no usuario 05/07
    var instrucaoSql = `
        INSERT INTO usuario (nome,  email, senha, fk_idolo) VALUES ('${nome}', '${email}', '${senha}', ${idIdolo});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function bancar(alternativasCertas, alternativasErradas, idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function bancar():", alternativasCertas, alternativasErradas, idUsuario);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO quiz (respostascertas, respostaserradas, fk_usuario) VALUES (${alternativasCertas}, ${alternativasErradas}, ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function mostrarQuiz(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function mostrarQuiz():", idUsuario);
    
    var instrucaoSql = `
    SELECT quiz.idQuiz,
           quiz.respostascertas, 
           quiz.respostaserradas,
           usuario.nome
    FROM quiz
    JOIN usuario ON quiz.fk_usuario = usuario.idUsuario
    WHERE quiz.idQuiz = (SELECT MAX(idQuiz) FROM quiz WHERE fk_usuario = ${idUsuario})
      AND usuario.idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function procurarQuiz(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function procurarQuiz():", idUsuario);
    
    var instrucaoSql = `
    SELECT quiz.idQuiz,
           quiz.respostascertas, 
           quiz.respostaserradas,
           usuario.nome
    FROM quiz
    JOIN usuario ON quiz.fk_usuario = usuario.idUsuario
    WHERE quiz.idQuiz = (SELECT MAX(idQuiz) FROM quiz WHERE fk_usuario = ${idUsuario})
      AND usuario.idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function quizatual(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function quizatual():", idUsuario);
    
    var instrucaoSql = `
    SELECT quiz.idQuiz,
       quiz.respostascertas, 
	   quiz.respostaserradas,
       usuario.nome         
FROM quiz
	JOIN usuario
		ON fk_usuario = ${idUsuario} WHERE idQuiz = (SELECT max(idQuiz) FROM quiz WHERE fk_suario = ${idUsuario} );
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
// Função para fazer o ranking do quiz 10/07
function rankingquiz(idUsuario) {
    
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function quizatual():", idUsuario);
    
    // Define o select que será executado para obter o ranking dos usuários, onde coloquei um limite que mostra apenas os 10 melhores usuarios.
    var instrucaoSql = `
        SELECT nome, respostascertas FROM (
            SELECT nome, respostascertas 
            FROM quiz 
            JOIN usuario ON idusuario = fk_usuario 
            ORDER BY respostascertas DESC 
            LIMIT 10
        ) as 10melhores 
        ORDER BY respostascertas ASC;
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    
    return database.executar(instrucaoSql);
}


module.exports = {
    autenticar,
    cadastrar,
    bancar,
    mostrarQuiz,
    procurarQuiz,
    quizatual,
    rankingquiz
};

