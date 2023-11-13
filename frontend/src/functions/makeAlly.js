import { api } from "./api"

export async function makeAlly(name){
    const result = JSON.parse(localStorage.getItem('userValues'))

    if(result.length > 4){
        alert('Você atingiu o numero máximo de amigos')
        return
    }

    const data = await api.get('/characters')
    .then(({ data }) => {
        return data;
    })

    const findedValue = data.find((value) => value.name === name)
    result.push(findedValue)

    localStorage.setItem('userValues', JSON.stringify(result))
    alert(`Você se aliou a ${findedValue.name}`)
}