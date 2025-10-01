import { useGameStore } from "../../../stores/gameStore"
import { NavigationButton } from "../../UI/ActionButtons"
import './CityView.css'

export default function CityView() {
    const { enterLocation } = useGameStore()

    return (
        <div style={{ padding: '100px 20px' }} className="city-districts">
            <NavigationButton ocClick={() => enterLocation('tavern')} descr={'Таверна'} />
            <NavigationButton ocClick={() => enterLocation('blacksmith')} descr={'Кузнец'} />
            <NavigationButton ocClick={() => enterLocation('portal')} descr={'Портал'} />
        </div>
    )
}