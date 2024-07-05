var idoloModel = require("../models/idoloModel");
// rota idolos
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
  var idIdolo = req.params.idIdolo;

  idoloModel.buscarPorId(idIdolo).then((resultado) => {
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
  listar,
  buscarPorId,
  cadastrar,
};
