import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TutorCard from '../../components/TutorCard';

const CategoryTutor = () => {
    const tutors = useLoaderData()


    console.log(tutors)

    if (tutors.length == 0) {
        return (
            <div>
                <h1 className="text-4xl text-center">
                    There No have any Tutors Of this Criteria
                </h1>
            </div>
        )
    }

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

export default CategoryTutor;