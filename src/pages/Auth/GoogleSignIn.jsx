import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const GoogleSignIn = ({ reExecute }) => {
    const { googleSignIn } = useAuth()
    // const location = useLocation()
    const navigate = useNavigate()
    // const reExecute = location
    // console.log(location)

    // const handleGoogleSignIn = () => {
    //     googleSignIn()
    //         .then((result) => {
    //             console.log('google login', result.user)




    //             navigate(reExecute)
    //         })
    //         .catch((error)=>{
    //             console.log('google Login error', error)
    //         })
    // }



    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                // console.log('Google login successful', result.user);
                const name = result?.user?.displayName;
                const email = result?.user?.email;


                // DB - users add
                const userInfo = { name, email};
                axios.get(`https://language-express-server-a-10.vercel.app/users/${email}`)
                    .then((response) => {
                        if (response.data) {
                            // console.log("User already exists:", response.data);
                            
                            navigate(reExecute);
                        } else {
                            // console.log("New user, creating account...");
                            axios.post('https://language-express-server-a-10.vercel.app/users', userInfo)
                                .then((postResponse) => {
                                    // console.log("New user added:", postResponse.data);
                                    navigate(reExecute);
                                })
                                .catch((error) => {
                                    // console.error("Error adding user:", error);
                                });
                        }
                    })
                    .catch((error) => {
                        // console.error("Error checking user:", error);
                    });

            })
            .catch((error) => {
                // console.log('Google Login error', error);
            });
    };







    return (
        <button onClick={handleGoogleSignIn}
            className="btn w-full border border-black text-black font-bold py-3 rounded-lg flex items-center justify-center">
            <svg
                className="w-5 h-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                fill="none"
            >
                <path
                    fill="#EA4335"
                    d="M24 9.5c3.04 0 5.44 1.23 7.06 2.53l5.16-5.16C32.16 4.2 28.4 3 24 3 14.83 3 7.14 8.84 4.36 16.43l6.74 5.24C12.8 13.62 17.89 9.5 24 9.5z"
                />
                <path
                    fill="#34A853"
                    d="M46.15 24.5c0-1.56-.12-3.12-.37-4.64H24v9.27h12.71c-.6 3.17-2.41 5.86-5.14 7.73l6.62 5.13c3.87-3.57 6.13-8.84 6.13-14.49z"
                />
                <path
                    fill="#4A90E2"
                    d="M9.1 28.06C8.4 26.24 8 24.17 8 22c0-2.17.4-4.24 1.1-6.06l-6.74-5.24C.77 14.68 0 18.24 0 22c0 3.76.77 7.32 2.36 10.3l6.74-5.24z"
                />
                <path
                    fill="#FBBC05"
                    d="M24 44c4.4 0 8.16-1.44 10.88-3.92l-6.62-5.13C26.89 36.34 25.55 36.5 24 36.5c-6.12 0-11.2-4.12-13.03-9.74l-6.74 5.24C7.14 39.16 14.83 45 24 45z"
                />
            </svg>
            Login with Google
        </button>
    );
};

export default GoogleSignIn;