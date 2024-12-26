import { FaStar } from "react-icons/fa";
import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const TutorDetails = () => {
    const singleTutorDetails = useLoaderData()
    const { user } = useAuth()
    const navigate = useNavigate()

    const {
        _id,
        tutorName,
        tutorEmail,
        image,
        tutorImage,
        language,
        tutorFee,
        description,
        review,
    } = singleTutorDetails;

    // post request for booked tutor
    // const handleBook = () => {
    //     const bookData = {
    //         tutorId: _id,
    //         tutorName,
    //         image,
    //         language,
    //         tutorFee,
    //         review,
    //         tutorEmail,
    //         userEmail: user?.email,

    //     }


    const handleBook = () => {
        const bookData = {
            tutorId: _id,
            tutorEmail,
            userEmail: user?.email,

        }

        axios.post('https://language-express-server-a-10.vercel.app/add-book', bookData)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        // position: "top-end",
                        icon: "success",
                        title: "Tutor successfully added to the booked list",
                        showConfirmButton: true,
                        // timer: 1500
                    });
                    navigate('/my-books')
                }
            })
            .catch(error => {
                // console.log(error)
            })

    }





    return (
        <div className="flex flex-col md:flex-row items-center p-4 gap-4 max-w-screen-xl mx-auto border">
            {/* Left Side: Image */}
            <div className="flex-shrink-0 w-full md:w-1/3">
                <img
                    src={image || tutorImage}
                    alt={tutorName}
                    className="rounded-lg shadow-lg w-full"
                />
            </div>

            {/* Right Side: Details */}
            <div className="flex-1 flex flex-col">
                <div className="flex-grow">
                    <h1 className="text-xl font-semibold">{tutorName}</h1>
                    <p className="text-gray-700 font-light">Language: {language}</p>
                    <h3 className="font-bold text-lg">Fee: ${tutorFee} Per Hour</h3>
                    <p>{description}</p>
                </div>
                <div className="">
                    <div>
                        <span className="text-2xl flex items-center gap-2"><FaStar className=""></FaStar>{review}</span>
                        <span className="text-gray-500">Reviews</span>
                    </div>
                    <button onClick={handleBook} className="btn w-full border border-black bg-[#FF7AAC]">Book</button>
                </div>
            </div>
        </div>
    );
};

export default TutorDetails;
