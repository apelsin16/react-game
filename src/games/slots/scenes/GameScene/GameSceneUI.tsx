import React, { FC, ReactNode } from 'react'
import SlotsBetsPanel from '../../ui/BetsPanel';
import SlotsInfoPanel from '../../ui/InfoPanel';
import SlotsEventPanel from '../../ui/EventPanel';

interface ISlotsGameSceneUIProps {
    children: ReactNode
}

const SlotsGameSceneUI:FC<ISlotsGameSceneUIProps> = ({children}) => {
  return (
    <div className='relative'>
        <div className='absolute left-[5%] top-[50%] translate-y-[-50%]'>
            <SlotsBetsPanel />
        </div>        
        <div className='absolute right-[15%] top-[30%]'>
            <SlotsInfoPanel />
        </div>        
        <div className='absolute right-[15%] top-[50%]'>
            <SlotsEventPanel />
        </div>        
        {children}
    </div>
  )
}

export default SlotsGameSceneUI;