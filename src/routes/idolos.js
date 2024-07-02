var express = require("express");
var router = express.Router();

var idoloController = require("../controllers/idoloController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    idoloController.cadastrar(req, res);
})

router.get("/buscar", function (req, res) {
    idoloController.buscarPorNome(req, res);
});

router.get("/buscar/:id", function (req, res) {
  idoloController.buscarPorId(req, res);
});

router.get("/listar", function (req, res) {
  idoloController.listar(req, res);
});

module.exports = router;