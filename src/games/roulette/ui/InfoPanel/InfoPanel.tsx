import { FC } from 'react'
import { useAppSelector } from '../../../../app/store/hooks'
import { selectActiveNumber, selectCurrentBet } from '../../slices/rouletteSlice'
import { selectBalance } from '../../../../entities/wallet/slices/walletSlice';
import ScoreWindow from "../../shared/scoreWindow";

interface IInfoPanelProps {}

export interface IScoreItem  {
    id: 'balance' | 'winBet' | 'currentBet' | 'activeNumber';
    title: string;
    icon: string;
}

const ITEMS:IScoreItem[]  = [
    {
        id: 'balance',
        title: 'Balance',
        icon: ''
    },    
    {
        id: 'winBet',
        title: 'Win Bet',
        icon: ''
    },
    {
        id: 'currentBet',
        title: 'Bet ',
        icon: ''
    },
    {
        id: 'activeNumber',
        title: 'Bet number',
        icon: ''
    },
]

const InfoPanel:FC<IInfoPanelProps> = () => {

    const balance = useAppSelector(selectBalance);
    const activeNumber = useAppSelector(selectActiveNumber);
    const currentBet = useAppSelector(selectCurrentBet);
    const winBet = 100;

    return (
        <div className='flex justify-evenly'>
            {ITEMS.map(({id, title}) => (
                <div
                    key={id}
                >
                    <div>{title}</div>
                    <div>
                        {id === 'balance' && (
                            <ScoreWindow icon="balance"
                            >
                                {balance}
                            </ScoreWindow>
                        )}
                        {id === 'winBet' && (
                            <ScoreWindow icon="winBet"
                            >
                                <div className='pr-1'>
                                    {winBet}
                                </div>
                            </ScoreWindow>
                        )}
                        {id === 'activeNumber' && (
                            <ScoreWindow icon="activeNumber"
                            >
                                <div className='pr-6'>
                                    {activeNumber}
                                </div>
                            </ScoreWindow>
                        )}
                        {id === 'currentBet' && (
                            <ScoreWindow icon="currentBet"
                            >
                                {currentBet}
                            </ScoreWindow>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default InfoPanel