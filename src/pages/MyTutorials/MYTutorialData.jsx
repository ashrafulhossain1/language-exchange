import React from 'react';
import { Link } from 'react-router-dom';

const MYTutorialData = ({ tutorial, handleDelete, handleUpdate }) => {
    const { _id, tutorName, image, language, tutorFee, description, review } = tutorial;

    return (
        <tr className="border-t dark:border-gray-700">
            <td className="p-2 md:p-4 text-center dark:text-white">{tutorName}</td>
            <td className="p-2 md:p-4 text-center">
                <img
                    src={image}
                    alt={tutorName}
                    className="h-12 w-12 object-cover rounded-full mx-auto"
                />
            </td>
            <td className="p-2 md:p-4 dark:text-white">{language}</td>
            <td className="p-2 md:p-4 dark:text-white">${tutorFee}</td>
            <td className="p-2 md:p-4 dark:text-white">{description.slice(0, 14)}..</td>
            <td className="p-2 md:p-4 dark:text-white">{review}</td>
            <td className="p-2 md:p-4 md:flex items-center justify-center gap-2">
                <Link
                    to={`/tutorial-update/${_id}`}
                    className="bg-blue-500 text-center text-white px-2 md:px-4 py-2 rounded mr-2 hover:bg-blue-600"
                >
                    <button className="">Update</button>
                </Link>
                <div className="bg-red-500 text-white text-center px-2 md:px-4 py-2 rounded hover:bg-red-600">
                    <button
                        className=""
                        onClick={() => handleDelete(_id)}
                    >
                        Delete
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default MYTutorialData;
