import React, { FC, ReactNode, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/store/hooks'
import { SlotLifecycle, selectSlotsLifecycle, setSlotsLifecycle } from '../../slices/slotsSlice'

interface ISlotsLifecycleProviderProps {
    children: ReactNode
}

const SlotsLifecycleProvider:FC<ISlotsLifecycleProviderProps> = ({children}) => {

    const lifecycle = useAppSelector(selectSlotsLifecycle);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(lifecycle === SlotLifecycle.PLAY) {
            const stopping = setTimeout(() => {
                dispatch(setSlotsLifecycle(SlotLifecycle.STOPPING));
            }, 2000)
            return () => clearTimeout(stopping)
        }
    }, [lifecycle, dispatch]);

    useEffect(() => {
        if(lifecycle === SlotLifecycle.STOPPING) {
            const stop = setTimeout(() => {
                dispatch(setSlotsLifecycle(SlotLifecycle.STOP));
            }, 3000)

            return () => clearTimeout(stop)
        }
    }, [lifecycle, dispatch]);

    useEffect(() => {
        if(lifecycle === SlotLifecycle.STOP) {
            dispatch(setSlotsLifecycle(SlotLifecycle.INFO));
        }
    }, [lifecycle, dispatch]);

    useEffect(() => {
        if(lifecycle === SlotLifecycle.INFO) {
            const ready = setTimeout(() => {
                dispatch(setSlotsLifecycle(SlotLifecycle.READY_TO_START));
            }, 3000);

            return () => clearTimeout(ready)
        }
    }, [lifecycle, dispatch]);

    return (
        <>{children}</>
    )
}

export default SlotsLifecycleProvider;