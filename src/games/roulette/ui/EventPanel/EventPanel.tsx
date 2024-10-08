import { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/store/hooks'
import { selectRouletteSpinCurrentNumber, setRouletteSpinStartSpeed } from '../../slices/rouletteSpinSlice';
import { RouletteLifecycle, selectRouletteLifecycle, selectRouletteWinOrLose, setRouletteLifecycle } from '../../slices/rouletteSlice';
import { sound } from '@pixi/sound';
import { SOUNDS_ROULETTE } from '../../scenes/GameScene/config';
import RouletteStartButton from "../../shared/button/RouletteStartButton.tsx";

interface IEventPanelProps {}

const EventPanel:FC<IEventPanelProps> = ({}) => {
    const lifecycle = useAppSelector(selectRouletteLifecycle);
    const winOrLose = useAppSelector(selectRouletteWinOrLose);
    const currentNumber = useAppSelector(selectRouletteSpinCurrentNumber);
    const dispatch = useAppDispatch();

    const onStart = () => {
        sound.play(SOUNDS_ROULETTE.SPIN);
        dispatch(setRouletteSpinStartSpeed());
        dispatch(setRouletteLifecycle(RouletteLifecycle.PLAY));
    }
    return (
        <div>
            {lifecycle === RouletteLifecycle.READY_TO_START && (
                <RouletteStartButton onClick={onStart}/>
            )}
            {lifecycle === RouletteLifecycle.PLAY && (
                <div>Playing...</div>
            )}
            {lifecycle === RouletteLifecycle.FINISHED && (
                <div>Calculating...</div>
            )}
            {lifecycle === RouletteLifecycle.INFO && (
                <div className='flex gap-4'>
                    <div>
                        {winOrLose === 'win' && 'Win!'}
                        {winOrLose === 'lose' && 'Lose!'}
                    </div>
                    <div>
                        {currentNumber}
                    </div>
                </div>
            )}
        </div>
    )
}

export default EventPanel