import { useGameStore } from "../../../stores/gameStore"
import { Spin } from "antd"
import { LoadingOutlined } from '@ant-design/icons';
import './Forest.css'

export default function Forest() {
    const { aiText, isLoading, startGame } = useGameStore()

    return (
        <div className="forest-container">
            <div style={{width: '100%'}}>
                <button onClick={startGame}>Изучить локацию</button>
                {isLoading ? <Spin tip={'Мастер думает ...'} indicator={<LoadingOutlined spin />}>{''}</Spin> : aiText}
            </div>
        </div>
    )
}