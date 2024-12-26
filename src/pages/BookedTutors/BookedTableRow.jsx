import axios from 'axios';
import React from 'react';

const BookedTableRow = ({ books, handleReviewCount, error, fetchLoading }) => {

    if (error) {
        return (
            <tbody>
                <tr>
                    <td colSpan='6' className='text-xl md:text-3xl text-center text-white'>
                        {error}
                    </td>
                </tr>
            </tbody>
        );
    }

    if (books.length === 0) {
        return (
            <tbody>
                <tr>
                    <td colSpan='6' className='text-xl md:text-3xl text-center text-white'>
                        {fetchLoading ? <p>wait </p> : 'No Tutor yet Not Booked'}
                    </td>
                </tr>
            </tbody>
        );
    }

    //     if (tutorials.length == 0) {
    //     return (
    //         <div className="dark:bg-gray-900 bg-gray-100 min-h-screen">
    //             <h1 className="text-4xl text-center text-gray-800 dark:text-white">
    //                 {loading ? <p>wait</p> : "You haven't added any Tutorial yet"}
    //             </h1>
    //         </div>
    //     )
    // }

    return (
        <>
            <tbody>
                {books.map((book, index) => (
                    <tr key={book._id} className="hover:bg-gray-100 dark:hover:bg-gray-800">
                        <td className="border text-xs md:text-base border-gray-300 dark:border-gray-600 px-2 md:px-4 py-2 text-center">
                            <img className='w-8 h-8 md:w-12 md:h-12 rounded-sm mx-auto' src={book.image} alt="" />
                        </td>
                        <td className="border text-xs md:text-base border-gray-300 dark:border-gray-600 px-2 md:px-4 py-2">{book.tutorName}</td>
                        <td className="border text-xs md:text-base border-gray-300 dark:border-gray-600 px-2 md:px-4 py-2">{book.language}</td>
                        <td className="border text-xs md:text-base border-gray-300 dark:border-gray-600 px-2 md:px-4 py-2 text-center">${book.tutorFee}</td>
                        <td className="border text-xs md:text-base border-gray-300 dark:border-gray-600 px-1 sm:px-2 md:px-4 py-2 text-center">
                            <button onClick={() => handleReviewCount(book.tutorId)} className='btn btn-sm md:btn-md'>
                                review
                            </button>
                        </td>
                        <td className='border text-xs md:text-base border-gray-300 dark:border-gray-600 px-2 md:px-4 py-2 text-center'>
                            {book.review}
                        </td>
                    </tr>
                ))}
            </tbody>
        </>
    );
};

export default BookedTableRow;
