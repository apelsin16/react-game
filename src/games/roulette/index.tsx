import React, { FC } from 'react';
import RouletteGameScene from './scenes/GameScene';

interface IGameRouletteProps {

}

const CoreGameRoulette:FC<IGameRouletteProps> = () => {
    return (
        <div>
            <RouletteGameScene />
        </div>
    );
};

export default CoreGameRoulette;