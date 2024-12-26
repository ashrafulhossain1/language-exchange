import { FaStar } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";

const TutorCard = ({ tutor ,fetchingLoad}) => {
    const {
        _id,
        tutorName,
        tutorEmail,
        image,
        language,
        tutorFee,
        description,
        review,
    } = tutor;



    if (fetchingLoad) {
        return (
            <div className="dark:bg-gray-900 bg-gray-100 min-h-screen">
                <h1 className="text-4xl text-center text-gray-800 dark:text-white">
                    {fetchLoading ?
                            <div className='flex flex-col md:flex-row justify-between gap-4'>
                                <div className="skeleton h-4 md:h-6 w-16 md:w-32"></div>
                                <div className="skeleton h-4 md:h-6 w-16 md:w-32"></div>
                                <div className="skeleton h-4 md:h-6 w-16 md:w-32"></div>
                                <div className="skeleton h-4 md:h-6 w-16 md:w-32"></div>
                            </div>
                            
                        : ""}
                </h1>
            </div>
        )
    }
    return (
        <div className="border rounded-lg shadow-md p-4 flex flex-col md:flex-row gap-4 dark:bg-gray-800 dark:border-gray-700">
            {/* image */}
            <div className="flex-1">
                <img className="h-60 w-full rounded-md" src={image} alt={tutorName} />
            </div>

            {/* tutor details */}
            <div className="flex-1 flex flex-col">
                <div className="flex-grow">
                    <h1 className="text-xl font-light text-gray-800 dark:text-gray-200">{tutorName}</h1>
                    <p className="text-gray-700 dark:text-slate-50 font-medium">Language: {language}</p>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">Fee: ${tutorFee} Per Hour</h3>
                    <div className="text-gray-700 dark:text-gray-300">{description.slice(0, 100)}...</div>
                </div>
                <div className="flex justify-between items-center">
                    <div>
                        <span className="text-2xl flex items-center gap-2 text-yellow-400">
                            <FaStar />
                            {review}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400">Reviews</span>
                    </div>
                    <Link
                        to={`/tutor/${_id}`}
                        className="btn w-1/2 border border-black bg-[#FF7AAC] dark:bg-[#FF4C87] text-white">
                        Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TutorCard;
