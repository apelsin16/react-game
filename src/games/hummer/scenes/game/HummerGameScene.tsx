import React, { FC } from 'react'
import { Stage } from '../../../../app/config/contextBridg';
import HummerBgPX from '../../pixi/game/bg/HummerBgPX';
import HummerPitsPX from '../../pixi/game/pits/HummerPitsPX';
import HummerGameSceneUI from './HummerGameSceneUI';

interface IHummerGameSceneProps {}

const HummerGameScene:FC<IHummerGameSceneProps> = ({}) => {

    const [width, height] = [550, 700];
    return (
        <div>
            <HummerGameSceneUI> 
                <Stage
                    width={width}
                    height={height}
                    options={{
                        background: 'green'
                    }}
                >
                    <HummerBgPX />                
                    <HummerPitsPX />
                </Stage>
            </HummerGameSceneUI>
        </div>
    )
}

export default HummerGameScene;