import { Header } from '../../components/Header'
import { AllyCard } from '../../components/AllyCard'
import logo from '../../assets/logo.png'
import styles from './styles.scss'
import { useEffect, useState } from 'react'
import { verifyToken } from '../../functions/verifyToken'


export function Alliance(){
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async() => {
            await verifyToken()
        }
        fetchData()
        const storedData = localStorage.getItem('userValues')
        setData(JSON.parse(storedData))
        setIsLoading(false)
    }, [])

    return(
        !isLoading &&
        <section className='my_allies_section'>
            <Header />
            <div className="main_title_area">
                <img src={logo} alt="logo do world of warcraft" className='logo' />
                <h2>Meus Aliados</h2>
            </div>
            <div className="ally_container">
                {
                    data.map((item) => (
                        <AllyCard image={item.image} />
                    ))
                }
            </div>
        </section>
    )
}