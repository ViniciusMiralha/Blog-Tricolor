var usuarioModel = require("../models/usuarioModel");


function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está indefinido!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        if (resultadoAutenticar.length > 0) {
                            res.json({
                                idUsuario: resultadoAutenticar[0].idUsuario,
                                email: resultadoAutenticar[0].email,
                                nome: resultadoAutenticar[0].nome,
                                /*cpf: resultadoAutenticar[0].cpf,*/
                                senha: resultadoAutenticar[0].senha,
                            });
                        } else {
                            res.status(204).json({ aquarios: [] });
                        }

                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    // adição da variavel idolo que puxa o idoloserver idolo -  02/07
    var idIdolo= req.body.idoloServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está indefinido");
    } else if (email == undefined) {
        res.status(400).send("Seu email está indefinido!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
// adição da mensagem de erro caso esteja como indefinido o idIdolo - 02/07
    } else if (idIdolo == undefined) {
        res.status(400).send("Seu idolo está indefinido!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js 
        usuarioModel.cadastrar(nome, email, senha, idIdolo)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function bancar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var alternativasCertas = req.body.alternativasCertasServer;
    var alternativasErradas = req.body.alternativasErradasServer;
    var idUsuario = req.body.idUsuarioServer;

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    usuarioModel.bancar(alternativasCertas, alternativasErradas, idUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );

}


function mostrarQuiz(req, res) {
    var idUsuario = req.body.idUsuarioServer

    usuarioModel.mostrarQuiz(idUsuario)
        .then(
            function (chamandoQuiz) {

                res.json({
                    chamandoQuiz
                });
            }
        )
}

function procurarQuiz(req, res) {
    var idUsuario = req.body.idUsuarioServer

  

    usuarioModel.procurarQuiz(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function quizatual(req, res) {
    var idUsuario = req.body.idUsuarioServer


    usuarioModel.quizatual(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}


module.exports = {
    autenticar,
    cadastrar,
    bancar,
    mostrarQuiz,
    procurarQuiz,
    quizatual
}