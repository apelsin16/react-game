import { FC, useEffect, useState } from 'react'
import { useAppSelector } from '../../../../app/store/hooks'
import { SlotLifecycle, selectSlotsCurrentBet, selectSlotsLifecycle } from '../../slices/slotsSlice'
import { selectBalance } from '../../../../entities/wallet/slices/walletSlice';
import SlotScoreWindow from "../../shared/scoreWindow/ScoreWindow";

interface ISlotsInfoPanelProps {}

const SlotsInfoPanel:FC<ISlotsInfoPanelProps> = () => {
    const currentBet = useAppSelector(selectSlotsCurrentBet);
    const balance = useAppSelector(selectBalance);

    const [ displayBalance, setDisplayBalance ] = useState(balance);

    const lifecycle = useAppSelector(selectSlotsLifecycle);

    const isInfo = lifecycle === SlotLifecycle.INFO;

    useEffect(() => {
        if(isInfo) {
            setDisplayBalance(balance)
        }
    }, [isInfo, balance])

    return (
        <div className='flex flex-col gap-8'>
            <SlotScoreWindow icon='balance'>
                {displayBalance ?? 0}
            </SlotScoreWindow>
            <SlotScoreWindow
                icon='bets'
            >
                {currentBet ?? 0}
            </SlotScoreWindow>
        </div>
    )
}

export default SlotsInfoPanel