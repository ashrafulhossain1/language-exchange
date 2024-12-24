import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TutorCard from '../../components/TutorCard';
import axios from 'axios';

const FindTutors = () => {
    const [tutors, setTutors] = useState([])

    useEffect(() => {
        const fetchJobs = async () => {
            const { data } = await axios.get(`http://localhost:3000/find-tutors`)
            setTutors(data)
        }
        fetchJobs()
    }, [])

    // console.log(tutors)
    return (
        <div>
            {/* heading title and description */}
            <div></div>
            {/* all tutors container */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-16'>
                {
                    tutors.map(tutor => <TutorCard key={tutor._id} tutor={tutor}></TutorCard>)
                }
            </div>
        </div>
    );
};

export default FindTutors;