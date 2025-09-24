import { NavLink } from "react-router-dom";
import { Layout } from 'antd'
import './AppHeader.css'

const setActive = ({isActive}) => isActive ? 'active-link' : 'nav-link';


export default function AppHeader() {
    return (
        <Layout.Header className='header-layout'>
            <div className='header-nav'>
                <NavLink to='/' className={setActive}>Главная</NavLink>
                <NavLink to='/charactercreator' className={setActive}>Создание персонажа</NavLink>
                <NavLink to='/game' className={setActive}>Играть</NavLink>
            </div>
        </Layout.Header>
    )
}