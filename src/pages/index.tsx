import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../app/router/utils';
import { useAppSelector } from '../app/store/hooks';
import { selectUserNickName } from '../entities/user/slices/userSlice';
import { useGetUserQuery } from '../entities/user/api/userApi';

interface IMainPageProps {

}

const MainPage:FC<IMainPageProps> = () => {
    const nickname = useAppSelector(selectUserNickName);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {data: users} = useGetUserQuery({userId: 1})
    return (
        <div className='grid gap-x-8 gap-y-4 grid-cols-3'>
            <p>{nickname}</p>
            <Link to={ROUTES.games.roulette}>Roulette</Link>
            <Link to={ROUTES.games.slots}>Slots</Link>
            <Link to={ROUTES.games.hummer}>Hummer</Link>
        </div>
    )
};

export default MainPage;