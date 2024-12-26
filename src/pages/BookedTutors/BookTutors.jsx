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
    const [fetchLoading, setFetchLoading] = useState(true)

    useEffect(() => {
        fetchMyBooks();
    }, [user]);

    // Fetch books
    const fetchMyBooks = async () => {
        try {
            const { data } = await axiosInterceptor.get(`/myBooked/${user.email}`);
            setBooks(data);
            setFetchLoading(false)
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



    if (books.length == 0) {
        return (
            <div className="dark:bg-gray-900 bg-gray-100 min-h-screen">
                <h1 className="text-4xl text-center text-gray-800 dark:text-white">
                    {fetchLoading ?
                        <div className='flex md:flex-col gap-10 mx-auto'>
                            <div className='flex flex-col md:flex-row justify-between gap-4'>
                                <div className="skeleton h-4 md:h-6 w-16 md:w-32"></div>
                                <div className="skeleton h-4 md:h-6 w-16 md:w-32"></div>
                                <div className="skeleton h-4 md:h-6 w-16 md:w-32"></div>
                                <div className="skeleton h-4 md:h-6 w-16 md:w-32"></div>
                            </div>
                            <div className='flex flex-col md:flex-row justify-between gap-4'>
                                <div className="skeleton h-4 md:h-6 w-16 md:w-32"></div>
                                <div className="skeleton h-4 md:h-6 w-16 md:w-32"></div>
                                <div className="skeleton h-4 md:h-6 w-16 md:w-32"></div>
                                <div className="skeleton h-4 md:h-6 w-16 md:w-32"></div>
                            </div>
                            <div className='flex flex-col md:flex-row justify-between gap-4'>
                                <div className="skeleton h-4 md:h-6 w-16 md:w-32"></div>
                                <div className="skeleton h-4 md:h-6 w-16 md:w-32"></div>
                                <div className="skeleton h-4 md:h-6 w-16 md:w-32"></div>
                                <div className="skeleton h-4 md:h-6 w-16 md:w-32"></div>
                            </div>
                        </div>
                        : "You haven't added any book in booked list"}
                </h1>
            </div>
        )
    }



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
                        fetchLoading={fetchLoading}
                    />
                </table>
            </div>
        </div>
    );
};

export default BookTutors;
