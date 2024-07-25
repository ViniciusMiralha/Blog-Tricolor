var idoloModel = require("../models/idoloModel");
// Importa o modelo que lida com as operações de dados dos ídolos 02/07

// Função para buscar ídolos pelo nome - 02/07
function buscarPorNome(req, res) {
  var nome = req.query.nome; // Obtém o nome a ser buscado dos parâmetros da requisição 

  // Chama o  modelo para buscar ídolos pelo nome
  idoloModel.buscarPorNome(nome).then((resultado) => {
    
    res.status(200).json(resultado);
  });
}

// Função para listar todos os ídolos - 02/07
function listar(req, res) {
  // Chama o  modelo para listar todos os ídolos
  idoloModel.listar().then((resultado) => {
   
    res.status(200).json(resultado);
  });
}

// Função para buscar um ídolo por ID - 02/07
function buscarPorId(req, res) {
  var idIdolo = req.params.idIdolo; // Obtém o ID do ídolo dos parâmetros da requisição

  // Chama o  modelo para buscar um ídolo pelo ID
  idoloModel.buscarPorId(idIdolo).then((resultado) => {
    
    res.status(200).json(resultado);
  });
}

// Função para cadastrar um novo ídolo - 02/07
function cadastrar(req, res) {
  var nome = req.body.nome; // Obtém o nome do novo ídolo dos dados da requisição
  
  // Verifica se já existe um ídolo com o mesmo nome
  idoloModel.buscarPorNome(nome).then((resultado) => {
    // Se encontrar algum resultado, significa que o ídolo já existe
    if (resultado.length > 0) {
      res
        .status(401)
        .json({ mensagem: `O ídolo com o nome ${nome} já existe` });
    } else {
      // Caso contrário, cadastra o novo ídolo
      idoloModel.cadastrar(nome).then((resultado) => {
      
        res.status(201).json(resultado);
      });
    }
  });
}


function contarUsuariosPorIdolo(req, res) {
  idoloModel.contarUsuariosPorIdolo()
      .then(result => {
          res.status(200).json(result);
      })
      .catch(err => {
          console.error(err);
          res.status(500).json({ error: "Erro ao buscar dados dos ídolos." });
      });
}


// Exporta todas as funções para serem utilizadas como métodos do módulo - 02/07
module.exports = {
  buscarPorNome,
  listar,
  buscarPorId,
  cadastrar,
  contarUsuariosPorIdolo,
};