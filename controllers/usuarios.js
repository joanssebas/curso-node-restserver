const {response, request} = require("express");

const usuariosGet = (req = request, res = response) => {
  const {q, nombre = "No name", apikey} = req.query;

  res.json({
    ok: true,
    msg: "get API - controlador",
    q,
    nombre,
    apikey,
  });
};

const usuariosPut = (req, res) => {
  const id = req.params.id;

  res.status(400).json({
    ok: true,
    msg: "put API",
    id,
  });
};

const usuariosDelete = (req, res) => {
  res.json({
    ok: true,
    msg: "delete API",
  });
};

const usuariosPost = (req, res) => {
  const {nombre, edad} = req.body;

  res.status(201).json({
    ok: true,
    msg: "post API",
    nombre,
    edad,
  });
};

const usuariosPatch = (req, res) => {
  res.json({
    ok: true,
    msg: "patch API",
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosDelete,
  usuariosPut,
  usuariosPatch,
};
