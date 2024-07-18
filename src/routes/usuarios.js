var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/bancar", function (req, res) {
    usuarioController.bancar(req, res);
});

router.post("/mostrarQuiz", function (req, res) {
    usuarioController.mostrarQuiz(req, res);
});

router.post("/procurarQuiz", function (req, res) {
    usuarioController.procurarQuiz(req, res);
});

router.post("/quizatual", function (req, res) {
    usuarioController.quizatual(req, res);
});
router.get("/rankingquiz", function (req, res) {
    // Chama a função 'rankingquiz' do controlador 'usuarioController', 10/07
    // passando os objetos requisição e resposta
    usuarioController.rankingquiz(req, res);
});
module.exports = router;