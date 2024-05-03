import { Link } from 'react-router-dom';
import error from '../../assets/images/error/Error-404.png';

const ErrorPage = () => {
    return (
        <>
            <div className='mt-10 w-[60rem] mx-auto'>
                <img src={error} alt="" />
            </div>
            <div className='w-2/4 mx-auto mt-10'>
                <Link to='/'><button className='btn btn-secondary text-lg w-full'>Home</button></Link>
            </div>
        </>
    );
};

export default ErrorPage;