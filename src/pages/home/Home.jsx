import { Link } from 'react-router-dom';
import Header from '../../layout/header/Header';
import Aside from '../../layout/aside/Aside';
import "./home.css"

export default function Home() {
    return <div>
        <Header />
        <Aside />
        <div className='main-home'>
            <Link to="/user/12"><button> User 12</button></Link>
            <Link to="/user/18"><button> User 18</button></Link >
        </div>
    </div >
}