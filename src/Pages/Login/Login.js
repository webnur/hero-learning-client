import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const [error, setError] = useState(null)
    console.log(error)
    const navigate = useNavigate();
    const { signIn, googleSigIn, githubSignIn } = useContext(AuthContext);


    
    const location = useLocation();
    const from = location.state?.from?.pathname || "";

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, {replace: true})
                setError('')
                form.reset()
            })
            .catch(e => {
                console.error(e)
                setError(e)
            })

    }

    const handleGoogleSignIn = () => {
        googleSigIn()
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, {replace: true})
            })
            .catch(e => console.error(e))
    }
    const handleGithubSignIn = () => {
        githubSignIn()
        .then(result => {
            const user = result.user;
            console.log(user)
            navigate(from, {replace: true})
        })
        .catch(e => console.error(e))
    }

    return (
        <div className="  bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">

                        <form onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                                {error && <p className='text-red-600'>{error.message}</p>}
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-primary' type="submit" value="Log In" />
                            </div>
                        </form>

                        <h2 className='text-center mt-2 font-bold'>OR</h2>
                        <div className='flex justify-center mt-1'>
                            <div onClick={handleGoogleSignIn} className='mr-4 text-xl p-4 rounded-full google-color'>
                                <FaGoogle className=''></FaGoogle>
                            </div>
                            <div onClick={handleGithubSignIn} className='text-xl p-4 rounded-full github-color'>
                                <FaGithub className=''></FaGithub>
                            </div>

                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;