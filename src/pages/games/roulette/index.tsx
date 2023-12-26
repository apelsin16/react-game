import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../app/router/utils';

interface IRoulettePageProps {

};

const RoulettePage:FC<IRoulettePageProps> = ({}) => {
    return (
        <div>
            <Link to={ROUTES.main}>Return to Main Page</Link>
            <div>! Roulette page !</div>
        </div>
    )
};

export default RoulettePage;