import { FaStar } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";

const TutorCard = ({ tutor }) => {
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

    return (
        <div className="border rounded-lg shadow-md p-4 flex flex-col md:flex-row gap-4">
            {/* image */}
            <div className="flex-1">
                <img className="h-full rounded-md" src={image} alt="" />
            </div>
            {/*  */}
            <div className="flex-1 flex flex-col">
                <div className="flex-grow">
                    <h1 className="text-xl font-light">{tutorName}</h1>
                    <p className="text-gray-700 font-medium">Language: {language}</p>
                    <h3 className="font-bold text-lg">Fee: ${tutorFee} Per Hour</h3>
                    <p>{description.slice(0, 150)}...</p>
                </div>
                <div className="flex justify-between items-center">
                    <div>
                        <span className="text-2xl flex items-center gap-2"><FaStar className=""></FaStar>{review}</span>
                        <span className="text-gray-500">Reviews</span>
                    </div>
                    <Link  to={`/tutor/${_id}`} className="btn w-1/2 border border-black bg-[#FF7AAC]">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default TutorCard;
