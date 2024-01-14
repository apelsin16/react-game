import React, { FC, useEffect } from 'react';
import * as PIXI from 'pixi.js';
import { AnimatedSprite } from '@pixi/react';
import { HummerPitState, IHummerPit } from '../../../slices/models/Pit';
import { useAppDispatch } from '../../../../../app/store/hooks';
import { setHummerPits, setHummerScore } from '../../../slices/HummerCoreSlice';

type HummerAnimatePitPXProps = {
    frames?: PIXI.Texture<PIXI.Resource>[],
    position: IHummerPit['position'],
    idx: number
}

const WIN_SCORE = 100;
const LOSE_SCORE = 200;

const HummerAnimatePitPX: FC<HummerAnimatePitPXProps> = ({frames, position, idx}) => {
    const dispatch = useAppDispatch();

    useEffect(() => {        
        const hideTimeout = setTimeout(() => {
            dispatch(setHummerScore(-LOSE_SCORE));
            dispatch(setHummerPits({
                currentIndex: idx, 
                state: HummerPitState.EMPTY
            }))
        }, 5000);
        return () => clearTimeout(hideTimeout);
    }, []);

    const onClick = () => {
        dispatch(setHummerScore(WIN_SCORE));
        dispatch(setHummerPits({
            currentIndex: idx, 
            state: HummerPitState.EMPTY
        }));
    }
    if(!frames?.length) {
        return <></>
    }
    return (
        <AnimatedSprite 
            textures={frames} 
            isPlaying={true}   
            animationSpeed={0.05} 
            anchor={{
                x: 0.5,
                y: 1
            }}    
            position={position}
            loop={false}
            interactive={true}
            onmousedown={onClick}
        />
    )
}

export default HummerAnimatePitPX