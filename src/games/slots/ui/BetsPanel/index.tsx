import { FC } from 'react'
import bet50 from '../../../../assets/roulette/bet-50.png';
import bet100 from '../../../../assets/roulette/bet-100.png';
import bet200 from '../../../../assets/roulette/bet-200.png';
import bet400 from '../../../../assets/roulette/bet-400.png';
import bet800 from '../../../../assets/roulette/bet-800.png';
import { useAppDispatch } from '../../../../app/store/hooks';
import { setSlotsCurrentBet } from '../../slices/slotsSlice';

interface ISlotsBetsPanelProps {}

const BETS = [
    {
        value: 50,
        image: bet50,
    },
    {
        value: 100,
        image: bet100,
    },
    {
        value: 200,
        image: bet200,
    },
    {
        value: 400,
        image: bet400,
    },
    {
        value: 800,
        image: bet800,
    },
];

const SlotsBetsPanel:FC<ISlotsBetsPanelProps> = () => {
    const dispatch = useAppDispatch();

    const pickBet = ( value: number ) => {
        // sound.play(SOUNDS_ROULETTE.BET);
        dispatch(setSlotsCurrentBet(value));
    }
    return (
        <div className='text-white font-medium'>
            <div className='flex gap-3 items-center'>
                {BETS.map(({value, image}) => (
                    <div
                        className='cursor-pointer hover:scale-[1.05] transition-all'
                        onClick={() => pickBet(value)}
                        onContextMenu={ e => {
                            e.preventDefault();
                            pickBet(-value);
                        }}
                        key={value}
                    >
                        <img src={image} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SlotsBetsPanel