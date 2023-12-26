import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../app/router/utils';

interface ISlotsPageProps {

};

const SlotsPage:FC<ISlotsPageProps> = ({}) => {
    return (
        <div>
            <Link to={ROUTES.main}>Return to Main Page</Link>
            <div>! Slots page !</div>
        </div>
    )
};

export default SlotsPage;