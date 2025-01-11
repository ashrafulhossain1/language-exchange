import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TutorCard from '../../components/TutorCard';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';

const FindTutors = () => {
    const [tutors, setTutors] = useState([]);
    const [search, setSearch] = useState('');
    const [fetchingLoad, setFetchingLoad] = useState(true)

    useEffect(() => {
        const fetchJobs = async () => {
            const { data } = await axios.get(`https://language-express-server-a-10.vercel.app/tutors?search=${search}`);
            setTutors(data);
            setFetchingLoad(false)
        };
        fetchJobs();
    }, [search]);

    return (
        <div className=" dark:bg-black text-base-content dark:text-slate-50 min-h-screen">
            <Helmet><title>Find Tutors</title></Helmet>
            {/* heading title and description */}
            <div className="py-8  md:w-1/2 w-full">
                <h1 className='text-lg pb-1 mb-2 flex border-l-2 pl-2'>You can Find tutors According Language</h1>
                <label className="input input-bordered flex items-center gap-2mx-auto">
                    <input
                        onChange={(e) => setSearch(e.target.value)}
                        type="text"
                        className="grow dark:text-black"
                        placeholder="Input any Language Name"
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70 dark:text-slate-50">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>
            </div>

            {/* all tutors container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-16">
                {
                    tutors.map(tutor => <TutorCard fetchingLoad={fetchingLoad} key={tutor._id} tutor={tutor}></TutorCard>)
                }
            </div>
        </div>
    );
};

export default FindTutors;
