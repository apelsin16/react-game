import { FC } from 'react'
import SlotsGameSceneUI from './GameSceneUI';
import { Stage } from '../../../../app/config/contextBridge.tsx';
import RowsPX from '../../pixi/rows/RowsPX';
import SlotsLifecycleProvider from './SlotsLifecycleProvider';
import SlotsBalanceProvider from './SlotsBalanceProvider';
import styles from './gameScene.module.css';
import {twMerge} from "tailwind-merge";
import BodyPX from "../../pixi/body/BodyPX.tsx";

interface ISlotsGameSceneProps  {}

const [width, height] = [1150, 500];

const SlotsGameScene:FC<ISlotsGameSceneProps> = ({}) => {
    return (
        <div
            className={
                twMerge('flex justify-center items-center', styles.table)
            }
            style={{width, height}}
        >
            <SlotsLifecycleProvider>
                <SlotsBalanceProvider>
                    <SlotsGameSceneUI>
                        <Stage
                        width={width}
                        height={height}
                        options={{
                            background: 'rgba(46, 29, 51, 0.96)'
                        }}
                        >
                        <BodyPX />
                        <RowsPX />
                        </Stage>
                    </SlotsGameSceneUI>
                </SlotsBalanceProvider>
            </SlotsLifecycleProvider>
        </div>
    )
}

export default SlotsGameScene;