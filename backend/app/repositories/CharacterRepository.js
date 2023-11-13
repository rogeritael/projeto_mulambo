const characters = require('../db/characters')

class CharacterRepository {
    findAll(){
        return new Promise((resolve, reject) => {
            resolve(characters)
        })
    }

    findById(id){
        return new Promise((resolve, reject) => {
            resolve(characters.find((pokemon) => pokemon.id === id))
        })
    }
}

module.exports = new CharacterRepository()