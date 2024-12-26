import React from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddTutorials = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleAddTutorial = (e) => {
        e.preventDefault();
        const form = e.target;
        const tutorName = form.name.value;
        const tutorEmail = form.email.value;
        const image = form.photo.value;
        const language = form.language.value;
        const tutorFee = parseInt(form.price.value);
        const description = form.description.value;
        const review = 0;

        const newTutorial = { tutorName, tutorEmail, image, language, tutorFee, description, review };

        axios.post('https://language-express-server-a-10.vercel.app/add-tutorials', newTutorial)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Your Tutorial added successfully",
                        showConfirmButton: true,
                    });
                    form.reset();
                    navigate('/my-tutorials');
                }
            })
            .catch(error => {
                // Handle error
            });
    }

    return (
        <div className="bg-gray-100 dark:bg-gray-800 min-h-screen">
            <div className="max-w-lg mx-auto mt-10 p-6 bg-white dark:bg-gray-900 rounded shadow-md">
                <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-gray-200">Add Tutorial</h2>
                <form onSubmit={handleAddTutorial}>
                    {/* Name Field */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                        <input
                            name='name'
                            type="text"
                            value={user?.displayName}
                            readOnly
                            className="w-full px-4 py-2 mt-1 border rounded-md bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
                        />
                    </div>

                    {/* Email Field */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                        <input
                            name='email'
                            type="email"
                            value={user.email}
                            readOnly
                            className="w-full px-4 py-2 mt-1 border rounded-md bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
                        />
                    </div>

                    {/* Image URL Field */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Image URL</label>
                        <input
                            name='photo'
                            type="url"
                            placeholder="Enter Tutorial Image URL"
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
                        />
                    </div>

                    {/* Language Field */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Teaching Language</label>
                        <select
                            name='language'
                            defaultValue='Pick One Option'
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
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
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Price</label>
                        <input
                            name='price'
                            type="number"
                            placeholder="Enter Price"
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
                        />
                    </div>

                    {/* Description Field */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
                        <textarea
                            name='description'
                            placeholder="Enter Tutorial Description"
                            rows="4"
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddTutorials;
