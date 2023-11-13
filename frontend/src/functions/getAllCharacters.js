import { api } from "./api"

export async function getAllCharacters(){
    // e.preventDefault()

    try {
        api.get('/characters')
        .then(({ data }) => {
            return data
            console.log(data)
        })
    } catch(e){
        alert(e)
    }
}