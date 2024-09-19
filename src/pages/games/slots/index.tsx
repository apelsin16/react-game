import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../app/router/utils';
import CoreGameSlots from '../../../games/slots';
import styles from '../../page.module.css';
import {twMerge} from "tailwind-merge";
import titleImage from '../../../assets/slots/title.svg';

interface ISlotsPageProps {

};

const SlotsPage:FC<ISlotsPageProps> = () => {
    return (
        <div
            className={twMerge(
                'h-screen flex justify-center items-center relative',
                styles.slots
            )}
        >
            <div className='absolute top-[5%] left-[50%] translate-x-[-50%] z-10'>
                <img src={titleImage} alt="Title"/>
            </div>
            <Link className='absolute top-2 left-2 text-white' to={ROUTES.main}>Return to Main Page</Link>
            <CoreGameSlots />
        </div>
    )
};

export default SlotsPage;