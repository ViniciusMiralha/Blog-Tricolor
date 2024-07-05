var database = require("../database/config");
// criação de rotas

function listar() {
  var instrucaoSql = `SELECT * FROM idolo`;

  return database.executar(instrucaoSql);
}

function cadastrar(nome) {
  var instrucaoSql = `INSERT INTO idolo (nome) VALUES ('${nome}')`;

  return database.executar(instrucaoSql);
}

function buscarPorNome(nome) {
  var instrucaoSql = `SELECT * FROM idolo WHERE nome = '${nome}'`;

  return database.executar(instrucaoSql);
}

function buscarPorId(idIdolo) {
  var instrucaoSql = `SELECT * FROM idolo WHERE idIdolo = '${idIdolo}'`;

  return database.executar(instrucaoSql);
}

module.exports = {  listar, cadastrar, buscarPorNome, buscarPorId };
