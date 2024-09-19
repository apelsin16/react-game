import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/store/hooks';
import { SlotLifecycle, selectSlotsLifecycle, selectSlotsWinOrLose, startSlots } from '../../slices/slotsSlice';
import winImage from '../../../../assets/slots/info/win.svg';
import loseImage from '../../../../assets/slots/info/lose.png';
import spinText from '../../../../assets/slots/info/spin.png';
import buttonImage from '../../../../assets/slots/info/button.png';
import handleImage from '../../../../assets/slots/info/handle.png';
import { twMerge } from 'tailwind-merge';

interface ISlotEventPanelProps {

};

const SlotEventPanel: FC<ISlotEventPanelProps> = () => {
    const lifecycle = useAppSelector(selectSlotsLifecycle);
    const winOrLose = useAppSelector(selectSlotsWinOrLose);

    const isReadyToStart = lifecycle === SlotLifecycle.READY_TO_START;
    const dispatch = useAppDispatch();
    const onStart = () => {
        dispatch(startSlots())
    }
    return (
        <div className="flex flex-col justify-between h-[300px] w-[150px]">
            <div>
                {lifecycle === SlotLifecycle.INFO && (
                    <div>
                        {winOrLose === 'win' && (
                            <img src={winImage} />
                        )}
                        {winOrLose !== 'win' && (
                            <img src={loseImage} />
                        )}
                    </div>
                )}
            </div>
            <div onClick={onStart} className={twMerge(
                "relative",
                isReadyToStart && 'cursor-pointer'
            )}>
                {isReadyToStart && (
                    <div className="absolute left-[45%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-20">
                        <img src={spinText} />
                    </div>
                )}
                <img src={buttonImage} className="z-10 relative" />
                <img className="absolute right-[85%] bottom-0" src={handleImage} />
            </div>
        </div>
    )
};

export default SlotEventPanel;