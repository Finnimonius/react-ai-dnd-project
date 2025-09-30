import GameMain from '../components/game/GameMain'
import ClassSelection from "../components/game/ClassSelection"
import RaceSelection from "../components/game/RaceSelection"
import Gameplay from '../components/game/Gameplay'
import { useNavigate, useParams, Navigate } from "react-router-dom"
import { useCharacterStore } from "../components/stores/characterStore"
import './Game.css'

export default function Game() {
    const navigate = useNavigate()
    const { step } = useParams()
    const { hasCharacter } = useCharacterStore()

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

    if (hasCharacter() && step !== 'game') {
        return <Navigate to="/play/game" replace />
    }

    if (!step && hasCharacter()) {
        return <Navigate to="/play/game" replace />
    }

    if (step === 'game' && !hasCharacter()) {
        return <Navigate to="/play" replace />
    }

    return (
        <section className='hero'>
                {currentScreen === 'main' && <GameMain onStartCreation={() => goToStep('class')} />}
                {currentScreen === 'class-selection' && <ClassSelection onNext={() => goToStep('race')} />}
                {currentScreen === 'race-selection' && <RaceSelection onNext={() => goToStep('game')} onBack={goBack} />}
                {currentScreen === 'gameplay' && <Gameplay onBack={goBack} />}
        </section>
    )
}