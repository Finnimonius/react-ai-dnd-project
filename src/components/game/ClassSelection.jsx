import { useCharacterStore } from '../stores/characterStore'
import { CLASSES } from "../../utils/characterData/classes";

const gameMainContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '90vh',
    gap: 50,
    padding: 40
}

export default function ClassSelection({ onNext, onBack }) {
    const { selectClass } = useCharacterStore()

    const handleSelectClass = (classData) => {
        selectClass(classData)
        onNext()
    }

    return (
        <div style={gameMainContainerStyle}>
            <button onClick={onBack}>Назад</button>
            <ul style={{ display: 'flex', listStyle: 'none'}}>
                {CLASSES.map(cls => {
                    return <li onClick={() => handleSelectClass(cls)} key={cls.id}>
                        <h3>{cls.name}</h3>
                        <p>{cls.description}</p>
                    </li>
                })}
            </ul>
        </div>
    )
}