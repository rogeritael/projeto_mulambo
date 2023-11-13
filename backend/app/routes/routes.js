const { Router } = require('express')

const CharacterController = require('../controllers/CharacterController')
const UserController = require('../controllers/UserController')

const router = Router();

router.get('/characters', CharacterController.index)
// router.get('/pokemons/:id', CharacterController.show)
router.post('/users/login', UserController.login)
router.post('/users/verify-token', UserController.validateToken)
// router.post('/users/logout', UserController.logout)
// router.post('/users/catch', UserController.catchPokemon)

module.exports = router 