import { useCharacterStore } from "../stores/characterStore"

const gameMainContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '90vh',
    gap: 50,
    padding: 40
}

export default function Gameplay () {
    const {reset} = useCharacterStore()

    return (
        <div style={gameMainContainerStyle }>
            <button onClick={reset}>Сбросить персонажа</button>
        </div>
    )
}