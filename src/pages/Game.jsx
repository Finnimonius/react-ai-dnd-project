import { useUIStore } from "../components/stores/uiStore"
import GameMain from '../components/game/GameMain'
import ClassSelection from "../components/game/ClassSelection"
import RaceSelection from "../components/game/RaceSelection"


const gameContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '90vh',
    padding: 40
}

export default function Game () {
    const { currentView } = useUIStore()

    const getCurrentScreen = () => {
        switch (currentView) {
            case 'class-selection':
                return <ClassSelection />
            case 'race-selection':
                return <RaceSelection />
            case 'gameplay':
                return <Gameplay />
            default:
                return <GameMain />
        }
    }

    return (
        <div style={gameContainerStyle}>
            {getCurrentScreen()}
        </div>
    )
}