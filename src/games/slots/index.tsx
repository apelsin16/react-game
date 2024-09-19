import { FC } from 'react'
import SlotsGameScene from './scenes/GameScene'

interface ICoreGameSlotsProps {}

const CoreGameSlots:FC<ICoreGameSlotsProps> = () => {
  return (
    <div>
        <SlotsGameScene />
    </div>
  )
}

export default CoreGameSlots