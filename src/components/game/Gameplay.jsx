import { useCharacterStore } from "../stores/characterStore"

export default function Gameplay () {
    const {reset} = useCharacterStore()

    return (
        <div>
            <button onClick={reset}>Сбросить персонажа</button>
        </div>
    )
}