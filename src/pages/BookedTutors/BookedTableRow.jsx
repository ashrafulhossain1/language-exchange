import axios from 'axios';
import React from 'react';

const BookedTableRow = ({ books }) => {
    if (books.length === 0) {
        return (
            <tbody>
                <tr>
                    <td colSpan='5' className='text-xl md:text-3xl text-center '>No Tutor yet Not Booked
                    </td>
                </tr>
            </tbody>
        );
    }
    const handleReviewCount = async (tutorId) => {
        console.log(tutorId)
        // const { data } = axios.patch
    }


    return (
        <>
            <tbody>
                {books.map((book, index) => (
                    <tr key={book._id} className="hover:bg-gray-100">
                        <td className="border text-xs md:text-base border-gray-300 px-2 md:px-4 py-2 text-center">
                            <img className='w-8 h-8 md:w-12 md:h-12 rounded-sm' src={book.image} alt="" />
                        </td>
                        <td className="border text-xs md:text-base border-gray-300 px-2 md:px-4 py-2">{book.tutorName}</td>
                        <td className="border text-xs md:text-base border-gray-300 px-2 md:px-4 py-2">{book.language}</td>
                        <td className="border text-xs md:text-base border-gray-300 px-2 md:px-4 py-2 text-center">${book.tutorFee}</td>
                        <td className="border text-xs md:text-base border-gray-300 px-1 sm:px-2 md:px-4 py-2 text-center">
                            <button onClick={() => handleReviewCount(book.tutorId)} className='btn btn-sm md:btn-md'>
                                review
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </>
    );
};

export default BookedTableRow;