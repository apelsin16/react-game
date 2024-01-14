import React, { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/store/hooks';
import { SlotLifecycle, selectSlotsLifecycle, setSlotsLifecycle, startSlots } from '../../slices/slotsSlice';

interface ISlotsEventPanelProps {}

const SlotsEventPanel:FC<ISlotsEventPanelProps> = ({}) => {
    const lifecycle = useAppSelector(selectSlotsLifecycle);
    const dispatch = useAppDispatch();

    const onStart = () => {
        dispatch(startSlots());
    }

    return (
        <div>
            {lifecycle === SlotLifecycle.READY_TO_START && (
                <button onClick={onStart}>GO</button>
            )}
        </div>
    )
}

export default SlotsEventPanel;