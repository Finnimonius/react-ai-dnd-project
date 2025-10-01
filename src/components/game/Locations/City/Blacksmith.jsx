import { useGameStore } from "../../../stores/gameStore"

export default function Blacksmith() {
    const { onBack } = useGameStore()
    return (
        <div style={{ padding: '100px 20px' }}>
            <button onClick={onBack}>В город</button>
        </div>
    )
}