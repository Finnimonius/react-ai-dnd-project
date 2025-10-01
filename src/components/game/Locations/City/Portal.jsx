import { useNavigate } from "react-router-dom";
import { NavigationButton } from "../../UI/ActionButtons";

export default function Portal() {
    const navigate = useNavigate()

    return (
        <div style={{ padding: '100px 20px' }}>
            <button onClick={() => navigate('/play/game')}>Назад</button>
            <NavigationButton  descr={'Подземелье'} />
            <NavigationButton  descr={'Древний лес'} />
        </div>
    )
}