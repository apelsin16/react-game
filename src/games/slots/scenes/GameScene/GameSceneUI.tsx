import { FC, ReactNode } from 'react'
import SlotsBetsPanel from '../../ui/BetsPanel';
import SlotsInfoPanel from '../../ui/InfoPanel';
import SlotsEventPanel from '../../ui/EventPanel';

interface ISlotsGameSceneUIProps {
    children: ReactNode
}

const SlotsGameSceneUI:FC<ISlotsGameSceneUIProps> = ({children}) => {
  return (
    <div className='relative'>
        <div className='absolute left-[50%] bottom-[3%] translate-x-[-50%]'>
            <SlotsBetsPanel />
        </div>        
        <div className='absolute left-[3%] top-[30%]'>
            <SlotsInfoPanel />
        </div>        
        <div className='absolute right-[9%] bottom-[15%]'>
            <SlotsEventPanel />
        </div>        
        {children}
    </div>
  )
}

export default SlotsGameSceneUI;