import { FC, ReactNode } from 'react'
import RouletteTable from '../../ui/RouletteTable/RouletteTable';
import BetsPanel from '../../ui/RouletteTable/BetsPanel/BetsPanel';
import InfoPanel from '../../ui/InfoPanel/InfoPanel';
import EventPanel from '../../ui/EventPanel/EventPanel';

interface IGameSceneUIProps {
    children: ReactNode;
}

const  GameSceneUI:FC<IGameSceneUIProps> = ({children}) => {
  return (
    <div className='relative'>
        <div className='absolute left-0 right-0 top-[5%] text-white'>
          <InfoPanel />
        </div>
        <div className='absolute left-[62%] top-[25%] text-white'>
          <EventPanel />
        </div>
        <div className='absolute bottom-[10%] left-[45%] text-white z-10'>
            <BetsPanel />
        </div>
        <div className='absolute left-[45%] bottom-[29%] text-white'>
            <RouletteTable />
        </div>
        {children}
    </div>
  )
}

export default GameSceneUI;