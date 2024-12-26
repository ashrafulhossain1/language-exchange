import { TbAlphabetArabic } from "react-icons/tb";
import { RiEnglishInput } from "react-icons/ri";
import { GiFrenchHorn } from "react-icons/gi";
import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
    const categoryNames = [
        { id: 1, language: 'English', tutors: '750 tutors', icon: <RiEnglishInput /> },
        { id: 2, language: 'Spanish', tutors: '1,500 tutors', icon: 'EY (e)' },
        { id: 3, language: 'French', tutors: '1,200 tutors', icon: <GiFrenchHorn /> },
        { id: 4, language: 'German', tutors: '10,000 tutors', icon: '🇩🇪' },
        { id: 5, language: 'Italian', tutors: '900 tutors', icon: '🇮🇹' },
        { id: 6, language: 'Chinese', tutors: '2500 tutors', icon: "通" },
        { id: 7, language: 'Arabic', tutors: '1,100 tutors', icon: <TbAlphabetArabic /> },
        { id: 8, language: 'Japanese', tutors: '800 tutors', icon: 'な' },
        { id: 9, language: 'Portuguese', tutors: '700 tutors', icon: '🇵🇹' },
    ];

    return (
        <div className="bg-gray-100 dark:bg-gray-900 py-10">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-center mb-6 text-black dark:text-slate-50">Language Categories</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {categoryNames.map((category) => (
                        <Link to={`/find-tutors/${category.language}`} key={category.id}>
                            <div
                                className="flex items-center justify-between p-4 border rounded-lg shadow-md bg-white dark:bg-gray-900 text-black dark:text-slate-50 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="text-2xl">{category?.icon}</span>
                                    <div>
                                        <h3 className="text-lg font-bold">{category.language} tutors</h3>
                                        <p className="text-sm text-gray-600 dark:text-slate-400">{category.tutors}</p>
                                    </div>
                                </div>
                                <span className="text-xl text-gray-500 dark:text-slate-300">&rarr;</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Category;
