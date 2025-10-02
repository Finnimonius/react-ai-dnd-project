import { useGameStore } from "../../../stores/gameStore"
import { Spin } from "antd"
import { LoadingOutlined } from '@ant-design/icons';
import './Forest.css'
import { NavigationButton } from "../../UI/ActionButtons";

export default function Forest() {
    const { aiText, isLoading, startGame } = useGameStore()

    return (
        <div className="forest-container">
            <NavigationButton onClick={startGame} descr={'Изучить локацию'} style={{width: 200}}/>
            <div style={{ width: '100%' }} className="forest-messages-container">
                <div className="forest-message-block">
                    {isLoading ?
                        <Spin indicator={<LoadingOutlined spin />} size="large" style={{ color: '#fff' }} />
                        :
                        <p>{aiText}</p>
                    }
                </div>
            </div>
        </div>
    )
}