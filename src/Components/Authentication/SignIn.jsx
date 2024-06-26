import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/images/login/login.svg';
import { useContext } from 'react';
import { AuthContex } from '../../Provider/AuthProvider';

const SignIn = () => {

    const { signIn } = useContext(AuthContex);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = { email, password };
        // console.log(user)

        // Create User 
        signIn(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user)
                // navigate(location?.state ? location?.state : '/')
            })
            .catch(error => {
                console.log(error)
            })
    }

    
    return (
        <>
            <div className="hero min-h-screen bg-base-200 mt-10 mb-5 rounded-xl">
                <div className="hero-content flex-col lg:flex-row gap-20">
                    <div className="">
                        <img src={login} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <h1 className="text-5xl font-bold text-center">Login</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Enter Your Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Enter Your Password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className='text-center mt-4'>
                                <h1 className='text-lg'>New to here.. Please <span className='text-orange-400'><Link to='/signup'>SignUp</Link></span></h1>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;