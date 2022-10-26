import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import './Register.css'
import { AuthContext } from '../../contexts/AuthProvider';

const Register = () => {
    const { createUser, googleSigIn, githubSignIn } = useContext(AuthContext)

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
            })
            .catch(error => console.error(error))

    }


    const handleGoogleSignIn = () => {
        googleSigIn()
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(e => console.error(e))
    }


    const handleGithubSignIn = () => {
        githubSignIn()
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(e => console.error(e))
    }


    return (
        <div className="bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">

                        <form onSubmit={handleSubmit}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Full Name" className="input input-bordered" required />
                            </div>
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
                                <label className="label">
                                    <Link className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-primary' type="submit" value="Submit" />
                            </div>
                        </form>
                        <h2 className='text-center mt-2 font-bold'>OR</h2>
                        <div className='flex justify-center mt-1'>
                            <div className='mr-4 text-xl p-4 rounded-full google-color'>
                                <FaGoogle onClick={handleGoogleSignIn} className=''></FaGoogle>
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
}

export default Register;