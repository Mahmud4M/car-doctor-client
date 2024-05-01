import { Outlet } from 'react-router-dom';
import NavBar from '../Pages/Shared/NavBar';
import Footer from '../Pages/Shared/Footer';

const Main = () => {
    return (
        <>
            <div className='max-w-7xl mx-auto'>
                <NavBar></NavBar>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </>
    );
};

export default Main;