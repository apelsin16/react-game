import React, { FC } from 'react';
import healthSvg from '../../../../../assets/hummer/health.svg';
import balanceSvg from '../../../../../assets/hummer/balance.svg';
import { useAppSelector } from '../../../../../app/store/hooks';
import { selectHummerHealth, selectHummerScore } from '../../../slices/HummerCoreSlice';
import { selectBalance } from '../../../../../entities/wallet/slices/walletSlice';

interface IScopePanelProps {}

const ScopePanel:FC<IScopePanelProps> = () => {
    const health = useAppSelector(selectHummerHealth);
    const scores = useAppSelector(selectHummerScore);
    const balance = useAppSelector(selectBalance);

    // const scores = 100;
    // const health = 5;
    // const balance = 100;
    return (
        <div className='flex justify-between items-center text-xl px-6'>
            <div>
                <div>Score</div>
                <div>{scores}</div>
            </div>
            <div className='relative'>
                <div className='absolute left-[-20%] top-[50%] translate-y-[-50%]'>
                    <img src={healthSvg} alt='' />
                </div>
                <div className='min-w-[80px] bg-slate-200 text-center pl-4 rounded-lg'>
                    {health}
                </div>
            </div>
            <div className='relative'>
                <div className='absolute left-[-20%] top-[50%] translate-y-[-50%]'>
                    <img src={balanceSvg} alt='' />
                </div>
                <div className='min-w-[100px] bg-slate-200 text-center pl-4 rounded-lg'>
                    {balance}
                </div>
            </div>
        </div>
    )
}

export default ScopePanel;