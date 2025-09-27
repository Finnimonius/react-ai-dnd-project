import { useUIStore } from "../stores/uiStore";

const gameMainContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '90vh',
    padding: 40
}

export default function GameMain() {
    const { goToClassSelection } = useUIStore()


    return (
        <div style={gameMainContainerStyle}>
            <button onClick={goToClassSelection}>Создать персонажа</button>
        </div>
    )
}