import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GoogleSignIn from './GoogleSignIn';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';

const SignUp = () => {
    const { emailPasswordSignUp, updateNameAndPhoto } = useAuth()
    const navigate = useNavigate()

    const handleSignUp = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.table({ name, photo, email, password })

        const userInfo = { name, email }
        // create user and update Profile
        emailPasswordSignUp(email, password)
            .then(result => {
                console.log(result.user)

                // update profile
                updateNameAndPhoto(name, photo)
                    .then(() => {
                        console.log('updated SUccessfully')
                    }).catch((error) => {
                        console.log("update Error", error)
                    })

                axios.post('http://localhost:3000/users', userInfo)
                    .then(res => {
                        console.log(res.data)
                    })

                navigate('/')
            })
            .catch(error => {
                console.log(error)
            })


    }

    return (
        <div>
            {/* others */}
            <div></div>
            {/* signUp */}
            <div>
                <div className="flex justify-center items-center md:min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 py-8">
                    {/* Form Container */}
                    <div className="card w-full max-w-lg p-8 bg-white shadow-2xl rounded-xl border-t-4 border-purple-500">
                        <h1 className="md:text-3xl text-xl text-center font-serif font-bold mb-6 text-purple-600">
                            Register Your Account
                        </h1>
                        <form onSubmit={handleSignUp} className="space-y-1">

                            {/* Name Input */}
                            <div className="form-control">
                                <label className="label font-medium text-gray-700">
                                    <span>Name</span>
                                </label>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Enter your name"
                                    className="input input-bordered w-full border-gray-300 focus:ring-2 focus:ring-blue-400 rounded-lg"
                                    required
                                />
                            </div>

                            {/* Photo URL Input */}
                            <div className="form-control">
                                <label className="label font-medium text-gray-700">
                                    <span>Photo URL</span>
                                </label>
                                <input
                                    name="photo"
                                    type="url"
                                    placeholder="Enter your photo URL"
                                    className="input input-bordered w-full border-gray-300 focus:ring-2 focus:ring-blue-400 rounded-lg"
                                    required
                                />
                            </div>

                            {/* Email Input */}
                            <div className="form-control">
                                <label className="label font-medium text-gray-700">
                                    <span>Email</span>
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    className="input input-bordered w-full border-gray-300 focus:ring-2 focus:ring-blue-400 rounded-lg"
                                    required
                                />
                            </div>

                            {/* Password Input */}
                            <div className="form-control ">
                                <label className="label font-medium text-gray-700">
                                    <span>Password</span>
                                </label>
                                <input
                                    name="password"
                                    type='text'
                                    placeholder="Enter your password"
                                    className="input input-bordered w-full border-gray-300 focus:ring-2 focus:ring-blue-400 rounded-lg"
                                    required
                                />
                            </div>
                            {/* Submit Button */}
                            <div className="form-control mt-0">
                                <button className="btn w-full bg-purple-700 text-white font-bold py-3 rounded-lg hover:bg-purple-600">
                                    Register
                                </button>
                            </div>
                        </form>
                        {/* Divider */}
                        <div className="text-center my-4 text-gray-500 relative">
                            <span className="bg-white px-3">OR</span>
                            <hr className="absolute top-3 w-full border-gray-300" />
                        </div>
                        {/* Google Login Button */}
                        <div className="flex justify-center">
                            <GoogleSignIn></GoogleSignIn>
                        </div>
                        {/* Sign In Link */}
                        <p className="text-center text-sm text-gray-600 mt-2">
                            Already have an account?{" "}
                            <Link to="/signIn" className="text-blue-500 font-semibold hover:underline">
                                Log In
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignUp;