import GameMain from '../components/game/GameMain'
import ClassSelection from "../components/game/ClassSelection"
import RaceSelection from "../components/game/RaceSelection"
import Gameplay from '../components/game/Gameplay'
import { useNavigate, useParams } from "react-router-dom"
// import { useCharacterStore } from "../components/stores/characterStore"


const gameContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '90vh',
    padding: 40
}

export default function Game() {
    const navigate = useNavigate()
    const { step } = useParams()
    // const { hasCharacter } = useCharacterStore()

    const goToStep = (stepName) => navigate(`/play/${stepName}`)
    const goBack = () => navigate(-1)

    const getCurrentScreen = () => {
        switch (step) {
            case 'class': return 'class-selection'
            case 'race': return 'race-selection'
            case 'game': return 'gameplay'
            default: return 'main'
        }
    }

    const currentScreen = getCurrentScreen()

    return (
        <div style={gameContainerStyle}>
            {currentScreen === 'main' && <GameMain onStartCreation={() => goToStep('class')} />}
            {currentScreen === 'class-selection' && <ClassSelection onNext={() => goToStep('race')} onBack={goBack} />}
            {currentScreen === 'race-selection' && <RaceSelection onNext={() => goToStep('game')} onBack={goBack}/>}
            {currentScreen === 'gameplay' && <Gameplay onBack={goBack} />}
        </div>
    )
}