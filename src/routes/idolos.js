var express = require("express");
var router = express.Router();

var idoloController = require("../controllers/idoloController");
// Importa o controlador que contém as funções para manipular os ídolos - 05/07

// Rota para receber dados do HTML e chamar a função cadastrar do idoloController.js - 05/07
router.post("/cadastrar", function (req, res) {
    idoloController.cadastrar(req, res);
})
 
// Rota para buscar ídolos por nome - 05/07
router.get("/buscar", function (req, res) {
    idoloController.buscarPorNome(req, res);
});

// Rota para buscar um ídolo por ID - 05/07
router.get("/buscar/:id", function (req, res) {
  idoloController.buscarPorId(req, res);
});

// Rota para listar todos os ídolos - 05/07
router.get("/listar", function (req, res) {
  idoloController.listar(req, res);
});

// Definindo a rota para contar usuários por ídolo 25/07
router.get("/contarUsuarios", function (req, res) {
  idoloController.contarUsuariosPorIdolo(req, res);
});

module.exports = router;