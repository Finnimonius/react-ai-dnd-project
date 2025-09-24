import { NavLink } from "react-router-dom";
import { Layout } from 'antd'
import logo from '../../assets/images/logos/main-logo.png'
import './AppHeader.css'

const setActive = ({ isActive }) => isActive ? 'active-link' : 'nav-link';


export default function AppHeader() {
    return (
        <Layout.Header className='header-layout'>
            <div className="header-container">
                <NavLink to='/'>
                    <img className="header-logo" src={logo} alt="Логотип dungeons and dragons" />
                </NavLink>
                <div className='header-nav'>
                    <NavLink to='/' className={setActive}>Главная</NavLink>
                    <NavLink to='/rules' className={setActive}>Правила</NavLink>
                    <NavLink to='/rule' className={setActive}>Не найдено</NavLink>
                    <NavLink to='/charactercreator' className={setActive}>Создание персонажа</NavLink>
                    <NavLink to='/game' className={setActive}>Играть</NavLink>
                </div>
            </div>
        </Layout.Header>
    )
}