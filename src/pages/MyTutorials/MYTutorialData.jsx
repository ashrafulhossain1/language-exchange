import React from 'react';
const MYTutorialData = ({ tutorial, handleDelete }) => {
    const { _id, tutorName, image, language, tutorFee, description, review } = tutorial

    return (
        <tr className="border-t">
            <td className="p-2 md:p-4 text-center">{tutorName}</td>
            <td className="p-2 md:p-4 text-center">
                <img
                    src={image}
                    alt={tutorName}
                    className="h-12 w-12 object-cover rounded-full mx-auto"
                />
            </td>
            <td className="p-2 md:p-4 ">{language}</td>
            <td className="p-2 md:p-4">${tutorFee}</td>
            <td className="p-2 md:p-4">{description.slice(0, 14)}..</td>
            <td className="p-2 md:p-4 ">{review}</td>
            <td className="p-2 md:p-4 md:flex gap-2">
                <button
                    // onClick={() => handleUpdate(tutorial._id)}
                    className="bg-blue-500 w-full text-white px-2 md:px-4 py-2 rounded mr-2 hover:bg-blue-600"
                >
                    Update
                </button>
                <button
                    onClick={() => handleDelete(_id)}
                    className="bg-red-500 w-full text-white px-2 md:px-4 py-2 rounded hover:bg-red-600"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default MYTutorialData;