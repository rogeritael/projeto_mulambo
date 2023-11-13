import styles from './styles.scss'

export function AllyCard({image}){
    return(
        <figure className="ally_card">
            <img src={image} alt="imagem do aliado" />
        </figure>
    )
}