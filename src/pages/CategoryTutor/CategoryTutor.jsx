import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import TutorCard from '../../components/TutorCard';
import { Helmet } from 'react-helmet-async';

const CategoryTutor = () => {
    const tutors = useLoaderData()
    const {category} = useParams()
    console.log(category)

    console.log(tutors)

    if (tutors.length == 0) {
        return (
            <div>
                <h1 className="text-4xl  text-center dark:text-white my-4">
                    There No have any Tutors Of this Criteria
                </h1>
            </div>
        )
    }

    return (
        <div>
            <Helmet>
                <title>Category Based Tutor</title>
            </Helmet>
            {/* heading title and description */}
            <div>
                <h2 className='py-3 text-center font-medium dark:text-white  md:text-3xl'>Category: {category}</h2>
            </div>
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