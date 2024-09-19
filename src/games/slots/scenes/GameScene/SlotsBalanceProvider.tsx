import { FC, ReactNode, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/store/hooks';
import { SlotLifecycle, SlotsWinOrLose, selectSlotsCurrentBet, selectSlotsLifecycle, selectSlotsWinOrLose } from '../../slices/slotsSlice';
import { setBalance } from '../../../../entities/wallet/slices/walletSlice';

interface ISlotsBalanceProviderProps {
    children: ReactNode
}

const KOEF_WIN = 10;

const SlotsBalanceProvider:FC<ISlotsBalanceProviderProps> = ({children}) => {
    const lifecycle = useAppSelector(selectSlotsLifecycle);
    const isPlaying = lifecycle === SlotLifecycle.PLAY;
    const win = useAppSelector(selectSlotsWinOrLose);
    const currentBet = useAppSelector(selectSlotsCurrentBet);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if(isPlaying) {
            dispatch(setBalance(win === SlotsWinOrLose.WIN ? currentBet * KOEF_WIN : -currentBet))
        }
    },[lifecycle]);

    return (
        <>{children}</>
    )
}

export default SlotsBalanceProvider;