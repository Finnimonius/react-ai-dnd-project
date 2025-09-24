import { NavLink } from "react-router-dom";
import { Layout } from 'antd'
import './AppHeader.css'

const headerStyle = {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'black',
};

export default function AppHeader() {
    return (
        <Layout.Header style={headerStyle}>
            <div className='nav'>
                <NavLink to='/'>Главная</NavLink>
                <NavLink to='/charactercreator'>Создание персонажа</NavLink>
                <NavLink to='/game'>Играть</NavLink>
            </div>
        </Layout.Header>
    )
}