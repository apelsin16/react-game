import React, { FC, useEffect, useState } from 'react'
import { useAppSelector } from '../../../../app/store/hooks'
import { SlotLifecycle, selectSlotsCurrentBet, selectSlotsLifecycle } from '../../slices/slotsSlice'
import { selectBalance } from '../../../../entities/wallet/slices/walletSlice';

interface ISlotsInfoPanelProps {}

const SlotsInfoPanel:FC<ISlotsInfoPanelProps> = ({}) => {
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
        <div>
            <div>
                <div>Balance:</div>
                <div>{displayBalance ?? 0}</div>
            </div>
            <div>
                <div>Bet:</div>
                <div>{currentBet}</div>
            </div>
        </div>
    )
}

export default SlotsInfoPanel