import { Button } from 'antd'
import { useGameStore } from '../../stores/gameStore'

export function NavigationButton({ descr, onClick }) {
    const { isLoading } = useGameStore()

    return (
        <Button type="primary" loading={isLoading} onClick={onClick}>
            {descr}
        </Button>
    )
}   