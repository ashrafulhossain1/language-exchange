import React from "react";
import { Link } from "react-router-dom";

const SpecialOffer = () => {
    const tutor = {
        _id: "676dad1c6446c86f9190d51f",
        tutorName: "Munzereen Shahid",
        tutorEmail: "munzereen@shahid.com",
        image:
            "https://i.ibb.co.com/395KrNjc/maxresdefault.jpg",
        language: "English",
        tutorFee: 30,
        description:
            "I am a friendly, patient, and approachable teacher of English as a foreign language. I teach English for a variety of purposes, including exam preparation (e.g., PET, FCE, CAE, CPE, and IELTS), as well as General English, Business English, and English for Academic Purposes.",
        review: 23,
    };

    return (
        <div className="bg-[#aed2754e] py-12">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <h2 className="text-3xl font-bold text-center text-black mb-8">
                    Special Offer for Ramadan 🌙
                </h2>

                {/* Card Container */}
                <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
                    {/* Image Section */}
                    <div className="relative">
                        <img
                            src={tutor.image}
                            alt={tutor.tutorName}
                            className="w-full h-full object-cover"
                        />
                        {/* Discount Badge */}
                        <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                            50% OFF
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex flex-col justify-center">
                        {/* Tutor Name and Email */}
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                            {tutor.tutorName}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            {tutor.tutorEmail}
                        </p>

                        {/* Description */}
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            {tutor.description}
                        </p>

                        {/* Language and Fee */}
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <p className="text-lg font-semibold text-gray-800 dark:text-white">
                                    Language:{" "}
                                    <span className="text-[#2F4021]">{tutor.language}</span>
                                </p>
                                <p className="text-lg font-semibold text-gray-800 dark:text-white">
                                    Reviews:{" "}
                                    <span className="text-[#2F4021]">{tutor.review}</span>
                                </p>
                            </div>
                            <div>
                                <p className="text-lg font-semibold text-gray-800 dark:text-white">
                                    Fee:{" "}
                                    <span className="line-through text-red-600">
                                        ${tutor.tutorFee}
                                    </span>{" "}
                                    <span className="text-[#2F4021]">
                                        ${tutor.tutorFee / 2}
                                    </span>
                                </p>
                            </div>
                        </div>

                        {/* Call-to-Action Button */}
                        <Link to='/tutor/676dad1c6446c86f9190d51f'>
                            <button className="w-full bg-[#2F4021] hover:bg-[#AFD275] hover:text-[#2F4021] text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
                                Book Now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialOffer;