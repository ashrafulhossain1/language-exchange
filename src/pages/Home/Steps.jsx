import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Steps = () => {
    return (
        <div
            id='start-learning'
            className="max-w-6xl mx-auto p-6">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
                How Preply works:
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Step 1 */}
                {/* <Fade duration={1500} direction='left'> */}
                <div className="border flex flex-col border-gray-300 dark:border-gray-700 p-6 rounded-lg shadow-md bg-white dark:bg-gray-800">
                    <div className="flex items-center mb-4">
                        <div className="bg-teal-500 text-white font-bold text-lg h-10 w-10 flex items-center justify-center rounded-full">
                            1
                        </div>
                        <h2 className="ml-4 text-2xl font-bold text-gray-800 dark:text-white">
                            Find your tutor.
                        </h2>
                    </div>
                    <p className="flex-grow text-gray-700 dark:text-gray-300 mb-4">
                        We’ll connect you with a tutor who will motivate, challenge, and inspire you.
                    </p>
                    <div className="flex items-center mb-2">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Andria-zafirakou-gtp-winner-2018.jpg"
                            alt="John's avatar"
                            className="h-12 w-12 rounded-full mr-4"
                        />
                        <div>
                            <h3 className="font-bold text-gray-800 dark:text-white">John</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Speaks English (Native), Spanish (Intermediate) +1
                            </p>
                            <p className="text-sm text-yellow-500">⭐ 4.7</p>
                        </div>
                    </div>

                    <div className="flex items-center mb-2">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg"
                            alt="Sophia's avatar"
                            className="h-12 w-12 rounded-full mr-4"
                        />
                        <div>
                            <h3 className="font-bold text-gray-800 dark:text-white">Sophia</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Speaks Italian (Native), German (Advanced) +3
                            </p>
                            <p className="text-sm text-yellow-500">⭐ 5.0</p>
                        </div>
                    </div>

                    <div className="flex items-center mb-2">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                            alt="Emma's avatar"
                            className="h-12 w-12 rounded-full mr-4"
                        />
                        <div>
                            <h3 className="font-bold text-gray-800 dark:text-white">Emma</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Speaks Japanese (Native), English (Fluent), French (Basic)
                            </p>
                            <p className="text-sm text-yellow-500">⭐ 4.8</p>
                        </div>
                    </div>
                </div>
                {/* </Fade> */}

                {/* Step 2 */}
                {/* <Fade direction='up' duration={1000}> */}
                <div className="border flex flex-col border-gray-300 dark:border-gray-700 rounded-lg p-6 shadow-md bg-white dark:bg-gray-800">
                    <div className="flex items-center mb-4">
                        <div className="bg-yellow-500 text-white font-bold text-lg h-10 w-10 flex items-center justify-center rounded-full">
                            2
                        </div>
                        <h2 className="ml-4 text-2xl font-bold text-gray-800 dark:text-white">
                            Start learning.
                        </h2>
                    </div>
                    <p className="flex-grow text-gray-700 dark:text-gray-300 mb-4">
                        Your tutor will guide the way through your first lesson and help you plan your next steps.
                    </p>
                    <img
                        src="https://images.ctfassets.net/r6vlh4dr9f5y/5eyN5QZi58TOFPMJiJ1pm2/8d38a8fb842157918a4b5b2a77a72f30/Robust_security_settings.jpg"
                        alt="Tutor and student"
                        className="w-full rounded-lg"
                    />
                </div>
                {/* </Fade> */}

                {/* Step 3 */}
                {/* <Fade direction='right' duration={1500}> */}
                <div className="border flex flex-col border-gray-300 dark:border-gray-700 rounded-lg p-6 shadow-md bg-white dark:bg-gray-800">
                    <div className="flex items-center mb-4">
                        <div className="bg-blue-500 text-white font-bold text-lg h-10 w-10 flex items-center justify-center rounded-full">
                            3
                        </div>
                        <h2 className="ml-4 text-2xl font-bold text-gray-800 dark:text-white">
                            Speak. Read. Write. Repeat.
                        </h2>
                    </div>
                    <p className="text-gray-700  dark:text-gray-300 mb-4 flex-grow">
                        Choose how many lessons you want to take each week and get ready to reach your goals! You will guide the way through your first lesson and help you plan your next steps.
                    </p>
                    <img
                        src="https://www.hurrayedutech.com/blog/2020/04/1586349538.jpg"
                        alt="Student writing"
                        className="w-full rounded-lg"
                    />
                </div>
                {/* </Fade> */}
            </div>
        </div>
    );
};

export default Steps;
