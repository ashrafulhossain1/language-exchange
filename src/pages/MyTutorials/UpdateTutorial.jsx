import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const UpdateTutorial = () => {
    const { user } = useAuth()
    const singleTutor = useLoaderData()
    const { updateId } = useParams()
    const navigate = useNavigate()
    // console.log('update Tutor ID', updateId)
    // console.log(singleTutor)
    // const {
    //     _id, tutorName, tutorEmail, image, tutorImage, language, tutorFee, description, review,
    // } = singleTutor



    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const tutorName = user?.displayName;
        const tutorEmail = user.email;
        const image = form.photo.value;
        const language = form.language.value;
        const tutorFee = parseInt(form.price.value);
        const description = form.description.value;
        const review = 0;
        // console.table({ tutorName, tutorEmail, image, language, tutorFee, description, review })
        const updatedTutorial = { tutorName, tutorEmail, image, language, tutorFee, description, review }

        axios.put(`https://language-express-server-a-10.vercel.app/updateTutorial/${updateId}`, updatedTutorial)
            .then(res => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        icon: "success",
                        title: "Your Updated has been saved",
                        showConfirmButton: true,
                    });
                    form.reset()
                    navigate('/my-tutorials')
                }
            })





    }


    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded shadow-md">
            <Helmet>
                <title>Update Tutorial</title>
            </Helmet>
            <h2 className="text-2xl font-semibold text-center mb-6">Add Tutorial</h2>
            <form onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        name='name'
                        type="text"
                        value={user?.displayName}
                        readOnly
                        className="w-full px-4 py-2 mt-1 border rounded-md bg-gray-200 text-gray-700"
                    />
                </div>

                {/* Email Field */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        name='email'
                        type="email"
                        value={user?.email}
                        readOnly
                        className="w-full px-4 py-2 mt-1 border rounded-md bg-gray-200 text-gray-700"
                    />
                </div>

                {/* Image URL Field */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Image URL</label>
                    <input
                        defaultValue={singleTutor?.image}
                        name='photo'
                        type="url"
                        placeholder="Enter Tutorial Image URL"
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Language Field */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Teaching Language</label>
                    <select
                        name='language'
                        defaultValue={singleTutor?.language}
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    >
                        <option disabled>Pick One Option</option>
                        <option value="English">English</option>
                        <option value="Spanish">Spanish</option>
                        <option value="French">French</option>
                        <option value="German">German</option>
                        <option value="Italian">Italian</option>
                        <option value="Chinese">Chinese</option>
                        <option value="Arabic">Arabic</option>
                        <option value="Japanese">Japanese</option>
                        <option value="Portuguese">Portuguese</option>
                    </select>
                </div>
                {/* Price Field */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Price</label>
                    <input
                        defaultValue={singleTutor?.tutorFee}
                        name='price'
                        type="number"
                        placeholder="Enter Price"
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Description Field */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        defaultValue={singleTutor?.description}
                        name='description'
                        placeholder="Enter Tutorial Description"
                        rows="4"
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    ></textarea>
                </div>


                {/* review */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">reviews</label>
                    <input
                        name='name'
                        type="text"
                        value={singleTutor?.review}
                        readOnly
                        className="w-full px-4 py-2 mt-1 border rounded-md bg-gray-200 text-gray-700"
                        required
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default UpdateTutorial;