import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Category = () => {
    const categoryNames = [
        { id: 1, language: 'English', tutors: '20,000 tutors' },
        { id: 2, language: 'Spanish', tutors: '15,000 tutors' },
        { id: 3, language: 'French', tutors: '12,000 tutors' },
        { id: 4, language: 'German', tutors: '10,000 tutors' },
        { id: 5, language: 'Italian', tutors: '9,000 tutors' },
        { id: 6, language: 'Chinese', tutors: '25,000 tutors' },
        { id: 7, language: 'Arabic', tutors: '11,000 tutors' },
        { id: 8, language: 'Japanese', tutors: '8,000 tutors' },
        { id: 9, language: 'Portuguese', tutors: '7,000 tutors' },
    ];

    return (
        <div className="bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-center mb-6">Language Categories</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {categoryNames.map((category) => (
                        <Link to={`/find-tutors/${category.language}`}
                        key={category.id}
                        >
                            <div
                                key={category.id}
                                className="flex items-center justify-between p-4 border rounded-lg shadow-md bg-white cursor-pointer hover:bg-gray-50"
                            >
                                <div className="flex items-center gap-4">
                                    <div>
                                        <h3 className="text-lg font-bold">{category.language} tutors</h3>
                                        <p className="text-sm text-gray-600">{category.tutors}</p>
                                    </div>
                                </div>
                                <span className="text-xl text-gray-500">&rarr;</span>
                            </div>
                        </Link>

                    ))}
                </div>
            </div>
        </div>
    );
};

export default Category;