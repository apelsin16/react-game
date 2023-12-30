import React, { FC } from 'react'
import { useAppSelector } from '../../../../app/store/hooks'
import { selectActiveNumber, selectCurrentBet } from '../../slices/rouletteSlice'
import { selectBalance } from '../../../../entities/wallet/slices/walletSlice';

interface IInfoPanelProps {};

type Item = {
    id: 'balance' | 'winBet' | 'currentBet' | 'activeNumber';
    title: string;
    icon: string;
}; 

const ITEMS:Item[]  = [
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

const InfoPanel:FC<IInfoPanelProps> = ({}) => {

    const balance = useAppSelector(selectBalance);
    const activeNumber = useAppSelector(selectActiveNumber);
    const currentBet = useAppSelector(selectCurrentBet);

    return (
        <div className='flex justify-evenly'>
            {ITEMS.map(({id, title, icon}) => (
                <div
                    key={id}
                >
                    <div>{title}</div>
                    <div>
                        {id === 'balance' && balance}
                        {id === 'activeNumber' && activeNumber}
                        {id === 'currentBet' && currentBet}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default InfoPanel