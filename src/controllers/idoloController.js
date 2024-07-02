var idoloModel = require("../models/idoloModel");

function buscarPorNome(req, res) {
  var nome = req.query.nome;

  idoloModel.buscarPorNome(nome).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function listar(req, res) {
  idoloModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorId(req, res) {
  var id = req.params.id;

  idoloModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function cadastrar(req, res) {
  var nome = req.body.nome;
  
  idoloModel.buscarPorNome(nome).then((resultado) => {
    if (resultado.length > 0) {
      res
        .status(401)
        .json({ mensagem: `O idolo com o nome ${nome} já existe` });
    } else {
      idoloModel.cadastrar(nome).then((resultado) => {
        res.status(201).json(resultado);
      });
    }
  });
}

module.exports = {
  buscarPorNome,
  buscarPorId,
  cadastrar,
  listar,
};
