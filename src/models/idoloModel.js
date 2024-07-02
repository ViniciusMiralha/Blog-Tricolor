var database = require("../database/config");

function buscarPorId(id) {
  var instrucaoSql = `SELECT * FROM idolo WHERE id = '${id}'`;

  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT * FROM idolo`;

  return database.executar(instrucaoSql);
}

function buscarPorNome(nome) {
  var instrucaoSql = `SELECT * FROM idolo WHERE nome = '${nome}'`;

  return database.executar(instrucaoSql);
}

function cadastrar(nome) {
  var instrucaoSql = `INSERT INTO idolo (nome) VALUES ('${nome}')`;

  return database.executar(instrucaoSql);
}

module.exports = { buscarPorNome, buscarPorId, cadastrar, listar };
