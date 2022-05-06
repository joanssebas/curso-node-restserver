const {Router} = require("express");
const {
  usuariosGet,
  usuariosPost,
  usuariosDelete,
  usuariosPut,
  usuariosPatch,
} = require("../controllers/usuarios");

const router = Router();

router.get("/", usuariosGet);

router.put("/:id", usuariosPut);

router.delete("/", usuariosDelete);

router.post("/", usuariosPost);

router.patch("/", usuariosPatch);

module.exports = router;
