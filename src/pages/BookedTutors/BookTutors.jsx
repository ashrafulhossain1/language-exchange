import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import BookedTableRow from './BookedTableRow';
import useAxiosInterceptor from '../../hooks/useAxiosInterceptor';
import toast, { Toaster } from 'react-hot-toast';

const axiosInterceptor = useAxiosInterceptor();

const BookTutors = () => {
    const { user } = useAuth();
    const [books, setBooks] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchMyBooks();
    }, [user]);

    // Fetch books
    const fetchMyBooks = async () => {
        try {
            const { data } = await axiosInterceptor.get(`/myBooked/${user.email}`);
            setBooks(data);
        } catch (error) {
            setError(error.message);
            toast.error(`Error: ${error.message}`);
        }
    };

    const handleReviewCount = async (tutorId) => {
        try {
            const { data } = await axiosInterceptor.patch(`/review/${tutorId}`);
            toast.success('Thanks for Reviewing!');
            fetchMyBooks();
        } catch (error) {
            toast.error('Something went wrong while updating the review count.');
        }
    };

    return (
        <div className="p-1 md:p-4 lg:p-6  dark:bg-gray-950 dark:text-white">
            <h1 className="text-2xl font-bold mb-4 text-center">My Booked Tutors</h1>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300 dark:border-gray-600">
                    <thead className="bg-gray-200 dark:bg-gray-800">
                        <tr>
                            <th className="border border-gray-300 dark:border-gray-600 px-1 sm:px-2 md:px-4 py-2 text-sm md:text-base">image</th>
                            <th className="border border-gray-300 dark:border-gray-600 px-1 sm:px-2 md:px-4 py-2 text-sm md:text-base">Name</th>
                            <th className="border border-gray-300 dark:border-gray-600 px-1 sm:px-2 md:px-4 py-2 text-sm md:text-base">Category</th>
                            <th className="border border-gray-300 dark:border-gray-600 px-1 sm:px-2 md:px-4 py-2 text-sm md:text-base">Price</th>
                            <th className="border border-gray-300 dark:border-gray-600 px-1 sm:px-2 md:px-4 py-2 text-sm md:text-base">Action</th>
                            <th className="border border-gray-300 dark:border-gray-600 px-1 sm:px-2 md:px-4 py-2 text-sm md:text-base">Reviews</th>
                        </tr>
                    </thead>
                    <BookedTableRow
                        error={error}
                        handleReviewCount={handleReviewCount}
                        books={books}
                    />
                </table>
            </div>
        </div>
    );
};

export default BookTutors;
