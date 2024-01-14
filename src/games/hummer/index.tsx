import React, { FC } from 'react'
import { useAppSelector } from '../../app/store/hooks';
import { HummerScenes, selectHummerScene,} from './slices/HummerCoreSlice';
import HummerMenuScene from './scenes/menu/HummerMenuScene';
import HummerGameScene from './scenes/game/HummerGameScene';

interface IHummerCoreProps {}

const HummerCore:FC<IHummerCoreProps> = ({}) => {

    const scene = useAppSelector(selectHummerScene);
    
    switch (scene) {
        case HummerScenes.MENU:
            return <HummerMenuScene />;
    
        case HummerScenes.GAME:
            return <HummerGameScene />;

        default:
            return <div>Something went wrong :(</div>;
    }
}

export default HummerCore;