import React, { FC, useEffect, useState } from 'react'
import { Container } from '@pixi/react'
import HummerPitPx from './HummerPitPx';
import * as PIXI from 'pixi.js';

import spritesheet from '../../../../../assets/hummer/sprite-mole.json';
import { useAppDispatch, useAppSelector } from '../../../../../app/store/hooks';
import { selectHummerPits, setHummerPits } from '../../../slices/HummerCoreSlice';
import { HummerPitState } from '../../../slices/models/Pit';

type HummerPitsPXProps = {}

const HummerPitsPX:FC<HummerPitsPXProps> = ({}) => {
    const dispatch = useAppDispatch();
    const [frames, setFrames] = useState<PIXI.Texture<PIXI.Resource>[]>();
    const pits = useAppSelector(selectHummerPits);


    useEffect(() => {
        const algorithmInterval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * 9);
            dispatch(setHummerPits({
                currentIndex: randomIndex,
                state: HummerPitState.PROCESSING
            }))
        }, 2000);
        return () => clearInterval(algorithmInterval);
    }, [dispatch]);

    useEffect(() => {
        PIXI.Assets.load(JSON.stringify(spritesheet)).then(() => {
            const names = ['mole-001.svg', 'mole-002.svg', 'mole-003.svg'];
            const genFrames = names.map((name) => {
                return PIXI.Texture.from(name);
            })
            setFrames(genFrames);
        })
    }, [])
    return (
        <Container
            x={25}
            y={50}
        >
            {pits.map((pit, idx) => (
                    <HummerPitPx 
                        key={`pit${idx}`}
                        {...pit}
                        frames={frames}
                        idx={idx}
                    />
                ))
            }
        </Container>
    )
}

export default HummerPitsPX;