import { NavLink } from "react-router-dom";
import { Layout } from 'antd'
import logo from '../../assets/images/logos/main-logo.png'
import './AppHeader.css'
import { useCharacterStore } from "../stores/characterStore";

const setActive = ({ isActive }) => isActive ? 'active-link' : 'nav-link';
const setActivePlay = ({ isActive }) => isActive ? 'active-link' : 'nav-link-play';


export default function AppHeader() {
    const { hasCharacter } = useCharacterStore()

    return (
        <Layout.Header className='header-layout'>
            <div className="header-container">
                <NavLink to='/'>
                    <img className="header-logo" src={logo} alt="Логотип dungeons and dragons" />
                </NavLink>
                <nav className='header-nav'>
                    <NavLink to='/' className={setActive}>Главная</NavLink>
                    <NavLink to='/rules' className={setActive}>Правила</NavLink>
                    <NavLink to='/charactercreato' className={setActive}>Создание персонажа</NavLink>

                    {hasCharacter() ? (
                        <NavLink to='/play/game' className={setActivePlay}>Играть</NavLink>
                    ) : (
                        <NavLink to='/play' className={setActivePlay}>Играть</NavLink>
                    )}
                    
                </nav>
            </div>
        </Layout.Header>
    )
}