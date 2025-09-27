import { useUIStore } from "../stores/uiStore";
import { useCharacterStore } from '../stores/characterStore'
import { CLASSES } from "../../utils/characterData/classes";

const gameMainContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '90vh',
    padding: 40
}

export default function ClassSelection() {
    const { goToRaceSelection } = useUIStore()
    const { selectClass } = useCharacterStore()

    const handleSelectClass = (classData) => {
        selectClass(classData)
        goToRaceSelection()
    }

    return (
        <div style={gameMainContainerStyle}>
            <ul>
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