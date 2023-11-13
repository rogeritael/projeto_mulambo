import { Watch } from "../Watch"
import { Link } from "react-router-dom";
import styles from './styles.scss'

export function Header(trackHour = true){
    return (
        <header id="topbar">
            <Watch /> 
            <nav>
                <ul>
                    <li><Link to={"/mapa"}>Mapa</Link></li>
                    <li><Link to={"/alliance"}>Alianças</Link></li>
                    <li><Link to={"/exploracao"}>Exploração</Link></li>
                </ul>
            </nav>
        </header>
    )
}