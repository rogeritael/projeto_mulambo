import './styles.scss'
import { Header } from '../../components/Header'
import { useEffect, useState } from 'react'
import { findCharacters } from '../../functions/findCharacters'
import { getAllCharacters } from '../../functions/getAllCharacters'
import { api } from '../../functions/api'
import { verifyToken } from '../../functions/verifyToken'
import { AiOutlineSearch } from 'react-icons/ai'

// const pokemons = ['','','','','','','']

export function Exploracao(){
    const [activeIndex, setActiveIndex] = useState()
    const [characters, setCharacters] = useState([])
    const [itemsToSearch, setItemsToSearch] = useState([''])
    const [data, setData] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async() => {
            await verifyToken()
            
            await api.get('/characters')
            .then(({ data }) => {
                setCharacters(data)
                setItemsToSearch(data)
            })
        }
        fetchData()
        const storedData = localStorage.getItem('userValues')
        setData(JSON.parse(storedData))
        setIsLoading(false)
    }, [])

    async function search(){
        const searchResult = itemsToSearch.filter(item => item.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));

        setCharacters(searchResult)
    }

    return(
        <section className='explore_page'>
            <Header />
            <div className="search_area">
                <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder='pesquise um personagem' />
                <button onClick={() => search()}><AiOutlineSearch></AiOutlineSearch></button>
            </div>
            <div className="container">
                {
                    characters &&
                    characters.map((character, index) => (
                        <div className={`card ${activeIndex === index ? 'active': ''} `} onClick={() => setActiveIndex(index)}>
                            <img src={character.image} alt={character.name} />
                            <p>
                                {character.description}
                            </p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}