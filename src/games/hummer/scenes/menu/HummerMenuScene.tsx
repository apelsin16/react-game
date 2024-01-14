import React, { FC } from 'react'
import StartButton from '../../ui/menu/StartButton';

interface IHummerMenuSceneProps {}

const HummerMenuScene:FC<IHummerMenuSceneProps> = ({}) => {
  return (
    <div>
        <div>Balance</div>
        <div>Last score</div>
        <StartButton />
    </div>
  )
}

export default HummerMenuScene;