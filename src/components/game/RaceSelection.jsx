import { RACES } from '../../utils/characterData/races'
import { useCharacterStore } from '../stores/characterStore'

const gameMainContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '90vh',
    padding: 40
}

export default function RaceSelection({ onNext, onBack }) {
    const { selectRace } = useCharacterStore()

    const handleSelectRace = (dataRace) => {
        selectRace(dataRace)
        onNext()
    }

    return (
        <div style={gameMainContainerStyle}>
            <button onClick={onBack}>Назад</button>
            <ul>
                {RACES.map(race => {
                    return <li onClick={() => handleSelectRace(race)} key={race.id}>
                        <h3>{race.name}</h3>
                        <p>{race.description}</p>
                    </li>
                })}
            </ul>
        </div>
    )
}