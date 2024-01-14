import React, { FC, ReactNode } from 'react'
import ScopePanel from '../../ui/game/scorePanel'
import LosePanel from '../../ui/game/losePanel'

type HummerGameSceneUIProps = {
    children: ReactNode
}

const HummerGameSceneUI:FC<HummerGameSceneUIProps> = ({children}) => {
  return (
    <div className='relative'>
        <div className='absolute left-0 right-0 top-[5%]'>
            <ScopePanel />
        </div>
        <div className='absolute left-[50%] top-[10%] translate-x-[-50%]' >
            <LosePanel />
        </div>
        {children}
    </div>
  )
}

export default HummerGameSceneUI