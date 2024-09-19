import { FC, useEffect } from 'react'
import RouletteSpinPX from '../../pixi/rouletteSpin/RouletteSpinPX';
import GameSceneUI from './GameSceneUI';
import { Stage } from '../../../../app/config/contextBridge.tsx';
import GameSceneActionsProvider from './GameSceneActionsProvider';
import soundBG from '../../../../assets/sounds/roulette/bg.mp3';
import soundBet from '../../../../assets/sounds/roulette/bet.mp3';
import soundNumber from '../../../../assets/sounds/roulette/number.mp3';
import soundRouletteSpin from '../../../../assets/sounds/roulette/spin.mp3';
import { sound } from '@pixi/sound';
import { SOUNDS_ROULETTE } from './config';
import * as PIXI from 'pixi.js';
import BgPX from "../../pixi/bg/bgPX.tsx";

interface IRouletteGameSceneProps {

};

const [width, height] = [1150, 500];



 const RouletteGameScene:FC<IRouletteGameSceneProps> =  () => {

    useEffect(() => {
        (async () => {
            await PIXI.Assets.load(SOUNDS_ROULETTE.BG);
            sound.volume(SOUNDS_ROULETTE.BG, 0.1);
            sound.play(SOUNDS_ROULETTE.BG);
        })()
        return () => {
            sound.stop(SOUNDS_ROULETTE.BG);
        }
    }, [])
    sound.add(SOUNDS_ROULETTE.BG, soundBG);
    sound.add(SOUNDS_ROULETTE.BET, soundBet);
    sound.add(SOUNDS_ROULETTE.NUMBER, soundNumber);
    sound.add(SOUNDS_ROULETTE.SPIN, soundRouletteSpin);
    return (
        <div className='flex flex-col items-center'>
            <GameSceneActionsProvider>
                <GameSceneUI >
                    <Stage
                        width={width}
                        height={height}
                        options={{
                            background: 'green'
                        }}
                    >
                        <BgPX />
                        <RouletteSpinPX />
                    </Stage>
                </GameSceneUI>
            </GameSceneActionsProvider>
        </div>
    )
    };

export default RouletteGameScene;