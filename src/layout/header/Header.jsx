import "./header.css"
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header className="header">
            <img src={logo} alt='logo' className="logo" />
            <nav>
                <ul>
                    <Link to="/"><li>Accueil</li></Link>
                    <li>Profil</li>
                    <li>Réglages</li>
                    <li>Communauté</li>
                </ul>
            </nav>
        </header>
    )
}