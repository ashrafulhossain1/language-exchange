import React from 'react';
import { useParams } from 'react-router-dom';

const Tutors = () => {
    const { language } = useParams()
    console.log(language)
    return (
        <div>
            {/* others for challenge part */}
            <div>
                <h1 className='text-3xl text-center border-2 bg-gray-300 my-4 py-4'>Filter Button || Search button || {language}</h1>
            </div>
            {/* tutors */}
            <div>
                <h1>here have card of tutors</h1>
                <p className='text-4xl'>So need card create <span className='text-red-400 text-4xl'>post</span></p>
            </div>
        </div>
    );
};

export default Tutors;