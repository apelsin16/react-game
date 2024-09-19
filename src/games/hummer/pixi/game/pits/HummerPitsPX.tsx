import { Container } from '@pixi/react';
import { FC, useEffect, useState } from 'react';
import { HummerPitState } from '../../../slices/models/Pit';
import HummerPitPX from './HummerPitPx';
import * as PIXI from 'pixi.js';

import { useAppDispatch, useAppSelector } from '../../../../../app/store/hooks';
import { selectHummerPits, setHummerPits } from '../../../slices/HummerCoreSlice';

interface IPitsPXProps {

}

const PitsPX:FC<IPitsPXProps> = () => {
    const [frames, setFrames] = useState<PIXI.Texture[]>();
    const pits = useAppSelector(selectHummerPits);

    const dispatch = useAppDispatch();

    useEffect(() => {
        const algoritmInternal = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * 9);
            dispatch(setHummerPits({
                currentIndex: randomIndex,
                state: HummerPitState.PROCESSING
            }))
        }, 2000);

        return () => clearInterval(algoritmInternal);
    }, []);

    useEffect(() => {
        const names = ['mole-001.png', 'mole-002.png', 'mole-003.png'].map((name) =>
            PIXI.Texture.from(name)
        );
        setFrames(names);
    }, []);

    if (frames?.length === 0) {
        return null; // Або можна відобразити лоадер чи інший контент
    }

    return (
        <Container
            x={25}
            y={50}
        >
            {pits.map((pit, idx) => (
                <HummerPitPX
                    key={`pit${idx}`}
                    frames={frames}
                    idx={idx}
                    {...pit}
                />
            ))}
        </Container>
    )
};

export default PitsPX;