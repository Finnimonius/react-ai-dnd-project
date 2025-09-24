import { Link } from "react-router-dom";
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
                <Link to='/'>Главная</Link>
                <Link to='/CharacterCreator'>Создание персонажа</Link>
                <Link to='/Game'>Играть</Link>
            </div>
        </Layout.Header>
    )
}