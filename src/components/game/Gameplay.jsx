import { useCharacterStore } from "../stores/characterStore"
import { Splitter, Menu, ConfigProvider } from 'antd';
import { useState } from "react";
import { AppstoreOutlined, ContainerOutlined, DesktopOutlined, MailOutlined, PieChartOutlined } from '@ant-design/icons';
import './Gameplay.css'
import CityView from "./Locations/City/CityView";
import { useGameStore } from "../stores/gameStore";

const locationComponent = {
    city: CityView,
}

export default function Gameplay() {
    const { currentLocation } = useGameStore()
    const { reset } = useCharacterStore()
    const [collapsed, setCollapsed] = useState(true);

    const CurrentLocation = locationComponent[currentLocation] || CityView

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    const handleMenuClick = (e) => {
        e.domEvent.stopPropagation();
    };

    const items = [
        { key: '1', icon: <PieChartOutlined />, label: 'Option 1' },
        { key: '2', icon: <DesktopOutlined />, label: 'Option 2' },
        { key: '3', icon: <ContainerOutlined />, label: 'Option 3' },
        {
            key: 'sub1',
            label: 'Navigation One',
            icon: <MailOutlined />,
            children: [
                { key: '5', label: 'Option 5' },
                { key: '6', label: 'Option 6' },
                { key: '7', label: 'Option 7' },
                { key: '8', label: 'Option 8' },
            ],
        },
        {
            key: 'sub2',
            label: 'Navigation Two',
            icon: <AppstoreOutlined />,
            children: [
                { key: '9', label: 'Option 9' },
                { key: '10', label: 'Option 10' },
                {
                    key: 'sub3',
                    label: 'Submenu',
                    children: [
                        { key: '11', label: 'Option 11' },
                        { key: '12', label: 'Option 12' },
                    ],
                },
            ],
        },
    ];

    return (
        <div className="gameplay-container">
            <div onClick={toggleCollapsed} className="gameplay-menu-container">
                <Menu
                    className="gameplay-menu"
                    defaultSelectedKeys={['1']}
                    mode="inline"
                    inlineCollapsed={collapsed}
                    items={items}
                    onClick={handleMenuClick}
                />
            </div>
            <ConfigProvider theme={{ token: { Splitter: { colorPrimary: '#000103', colorFill: 'white', controlItemBgActiveHover: 'rgb(0,0,0)', controlItemBgActive: 'rgb(0,0,0)', } } }}>
                <Splitter style={{ minHeight: '90vh', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                    <Splitter.Panel resizable={true} className="gameplay-splitter">
                        <CurrentLocation />
                    </Splitter.Panel>
                    <Splitter.Panel min={'20%'} defaultSize={'40%'} max={'60%'} style={{ padding: '100px 20px' }} className="gameplat-splitter-character">
                        <button onClick={reset}>Сбросить персонажа</button>
                    </Splitter.Panel>
                </Splitter>
            </ConfigProvider>
        </div>
    )
}