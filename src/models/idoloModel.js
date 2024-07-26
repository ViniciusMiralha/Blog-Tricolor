var database = require("../database/config");
// Importa a configuração do banco de dados para executar consultas SQL

// Função para listar todos os ídolos do banco de dados - 02/07
function listar() {
  var instrucaoSql = `SELECT * FROM idolo`;

  return database.executar(instrucaoSql);
}

// Função para cadastrar um novo ídolo no banco de dados - 02/07
function cadastrar(nome) {
  var instrucaoSql = `INSERT INTO idolo (nome) VALUES ('${nome}')`;

  return database.executar(instrucaoSql);
}

// Função para buscar ídolos pelo nome no banco de dados - 02/07
function buscarPorNome(nome) {
  var instrucaoSql = `SELECT * FROM idolo WHERE nome = '${nome}'`;

  return database.executar(instrucaoSql);
}

// Função para buscar um ídolo pelo ID no banco de dados - 02/07
function buscarPorId(idIdolo) {
  var instrucaoSql = `SELECT * FROM idolo WHERE idIdolo = '${idIdolo}'`;

  return database.executar(instrucaoSql);
}

// Função para contar quantos usuários escolheram cada ídolo - 25/07
function contarUsuariosPorIdolo() {
   // Define a instrução SQL para contar o número de usuários associados a cada ídolo
    var instrucaoSql = `
        SELECT i.idIdolo, i.nome, COUNT(u.idUsuario) AS quantidade
        FROM idolo i
        LEFT JOIN usuario u ON i.idIdolo = u.fk_idolo
        GROUP BY i.idIdolo;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Exporta todas as funções para serem utilizadas como métodos deste módulo - 02/07
module.exports = {
  listar,
  cadastrar,
  buscarPorNome,
  buscarPorId,
  contarUsuariosPorIdolo
};
