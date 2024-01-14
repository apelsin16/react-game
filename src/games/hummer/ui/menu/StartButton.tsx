import React, { FC } from 'react'
import { useAppDispatch } from '../../../../app/store/hooks'
import { HummerScenes, setHummerScene } from '../../slices/HummerCoreSlice';

type HummerMenuStartButtomProps = {}

const StartButton: FC<HummerMenuStartButtomProps> = ({}) => {
    const dispatch = useAppDispatch();
    const onStart = () => {
        dispatch(setHummerScene(HummerScenes.GAME))
    }
    return (
        <button
            onClick={onStart}
        >
            Start game
        </button>
    )
}

export default StartButton;