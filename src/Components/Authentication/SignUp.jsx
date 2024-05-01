import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg';
import { useContext } from 'react';
import { AuthContex } from '../../Provider/AuthProvider';


const SignUp = () => {

    const { createUser } = useContext(AuthContex);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const conPassword = form.conpassword.value;
        const user = { email, password, conPassword };
        if (password !== conPassword) {
            alert('Password Did not Match')
            return
        }
        console.log(user)

        // Create User 
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
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
                            <h1 className="text-5xl font-bold text-center">SignUp</h1>
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name='conpassword' placeholder="Enter Your Password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">SignUp</button>
                            </div>
                            <div className='text-center mt-4'>
                                <h1 className='text-lg'>Already Have an Account Please <span className='text-orange-400'><Link to='/login'>Login</Link></span></h1>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;