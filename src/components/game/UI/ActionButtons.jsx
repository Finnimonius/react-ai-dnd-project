import { Button } from 'antd'
import { useGameStore } from '../../stores/gameStore'

export function NavigationButton({ descr }) {
    const { isLoading } = useGameStore()

    return (
        <Button type="primary" loading={isLoading}>
            {descr}
        </Button>
    )
}   