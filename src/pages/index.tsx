import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../app/router/utils';
// import { useAppSelector } from '../app/store/hooks';
// import { selectUserNickName } from '../entities/user/slices/userSlice';
import { useGetUserQuery } from '../entities/user/api/userApi';
import rouletteImage from '../assets/roulette.png';
import slotsImage from '../assets/slots.png';


interface IMainPageProps {

}

const MainPage:FC<IMainPageProps> = () => {
    // const nickname = useAppSelector(selectUserNickName);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    useGetUserQuery({userId: 1})
    return (
        <div className='flex gap-[36px]'>
            {/*<p>{nickname}</p>*/}
            <Link to={ROUTES.games.roulette} className='text-white text-center font-bold text-2xl'>
                <img src={rouletteImage} alt="menu item" className='w-[300px] h-[200px] object-cover'/>
                Roulette
            </Link>
            <Link to={ROUTES.games.slots} className='text-white text-center font-bold text-2xl'>
                <img src={slotsImage} alt="menu item" className='w-[300px] h-[200px] object-cover'/>
                Slots
            </Link>
            {/*<Link to={ROUTES.games.hummer}>Hummer</Link>*/}
        </div>
    )
};

export default MainPage;