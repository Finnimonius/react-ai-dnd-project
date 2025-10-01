import { useNavigate } from "react-router-dom"
import { NavigationButton } from "../../UI/ActionButtons"
import './CityView.css'

export default function CityView() {
    const navigate = useNavigate()

    return (
        <div style={{ padding: '100px 20px' }} className="city-districts">
            <NavigationButton onClick={() => navigate('/play/game/tavern')} descr={'Таверна'} />
            <NavigationButton onClick={() => navigate('/play/game/blacksmith')} descr={'Кузнец'} />
            <NavigationButton onClick={() => navigate('/play/game/portal')} descr={'Портал'} />
        </div>
    )
}