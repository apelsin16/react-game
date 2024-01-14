import React, { FC } from 'react'
import SlotsGameSceneUI from './GameSceneUI';
import { Stage } from '../../../../app/config/contextBridg';
import RowsPX from '../../pixi/rows/RowsPX';
import SlotsLifecycleProvider from './SlotsLifecycleProvider';
import SlotsBalanceProvider from './SlotsBalanceProvider';

interface ISlotsGameSceneProps  {}

const [width, height] = [1150, 500];

const SlotsGameScene:FC<ISlotsGameSceneProps> = ({}) => {
    return (
        <div className='flex justify-center items-center'>
            <SlotsLifecycleProvider>
                <SlotsBalanceProvider>
                    <SlotsGameSceneUI>
                        <Stage
                        width={width}
                        height={height}
                        options={{
                            background: 'green'
                        }}
                        >
                        <RowsPX />
                        </Stage>
                    </SlotsGameSceneUI>
                </SlotsBalanceProvider>
            </SlotsLifecycleProvider>
        </div>
    )
}

export default SlotsGameScene;