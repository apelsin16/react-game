import {FC} from "react";
import { Outlet } from "react-router-dom";

interface IMainLayoutProps {

};

const MainLayout:FC<IMainLayoutProps>  = () => {
    return (
        <div className='flex justify-center items-center h-screen bg-green-900'>
            <Outlet />
        </div>
    )
}

export default MainLayout;