import { RACES } from '../../utils/characterData/races'
import { useUIStore } from '../stores/uiStore'
import { useCharacterStore } from '../stores/characterStore' 

const gameMainContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '90vh',
    padding: 40
}

export default function RaceSelection () {
    const { goToGameplay } = useUIStore()
    const { selectedRace } = useCharacterStore()

    const handleSelectRace = (dataRace) => {
        selectedRace(dataRace)
        goToGameplay()
    }

    return (
        <div style={gameMainContainerStyle}>
            <ul>
                {RACES.map(race => {
                    return <li onClick={() => handleSelectRace(race)}>
                        <h3>{race.name}</h3>
                        <p>{race.description}</p>
                    </li>
                })}
            </ul>
        </div>
    )
}