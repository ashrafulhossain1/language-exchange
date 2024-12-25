import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import BookedTableRow from './BookedTableRow';
// import BookedTableRow from './BookedTableRow';
// import BookedTableRow from './BookedTableRow';

const BookTutors = () => {
    const { user } = useAuth()
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetchMyBooks()
    }, [user])

    // fetch (call from useEffect)
    const fetchMyBooks = async () => {
        try {
            const { data } = await axios.get(`http://localhost:3000/myBooked/${user.email}`)
            setBooks(data)
        }
        catch (error) {
            console.log('my books fetching error', error)
        }
    }


    return (
        <div className="p-1 md:p-4 lg:p-6">
            <h1 className="text-2xl font-bold mb-4 text-center">My Booked Tutors</h1>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="border border-gray-300 px-1 sm:px-2 md:px-4 py-2 text-sm md:text-base">#</th>
                            <th className="border border-gray-300 px-1 sm:px-2 md:px-4 py-2 text-sm md:text-base">Name</th>
                            <th className="border border-gray-300 px-1 sm:px-2 md:px-4 py-2 text-sm md:text-base">Category</th>
                            <th className="border border-gray-300 px-1 sm:px-2 md:px-4 py-2 text-sm md:text-base">Price</th>
                            <th className="border border-gray-300 px-1 sm:px-2 md:px-4 py-2 text-sm md:text-base">Action</th>
                        </tr>
                    </thead>
                    <BookedTableRow books={books}></BookedTableRow>
                </table>
            </div>
        </div>
    );
};

export default BookTutors;