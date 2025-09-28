const gameMainContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '90vh',
    padding: 40
}

export default function GameMain({ onStartCreation }) {
    return (
        <div style={gameMainContainerStyle}>
            <button onClick={onStartCreation}>Создать персонажа</button>
        </div>
    )
}