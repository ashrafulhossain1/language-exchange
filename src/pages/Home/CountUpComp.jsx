import axios from 'axios';
import { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import CountUp from 'react-countup';

const CountUpComp = () => {

    const [tutorCount, setTutorCount] = useState(0);
    const [usersCount, setUsersCount] = useState(0);
    const [reviewsCount, setReviewsCount] = useState(0);

    useEffect(() => {
        // tutorCount API call using axios
        axios.get('https://language-express-server-a-10.vercel.app/tutorCount')
            .then(response => setTutorCount(response.data.tutorCount))
            .catch(error => console.error('Error fetching tutor count:', error));

        // usersCount API call using axios
        axios.get('https://language-express-server-a-10.vercel.app/users')
            .then(response => setUsersCount(response.data.userCount))
            .catch(error => console.error('Error fetching users count:', error));

        // reviewsCount API call using axios
        axios.get('https://language-express-server-a-10.vercel.app/reviewsCount')
            .then(response => setReviewsCount(response.data.reviewCount))
            .catch(error => console.error('Error fetching reviews count:', error));
    }, []);

    return (
        <div className="bg-gray-100 dark:bg-black py-5 md:py-10 ">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center gap-x-4">
                    {/* Column 1 */}
                    <Fade duration={1000} direction='left'>
                        <div className='border bg-white dark:bg-gray-800 py-4 rounded-xl'>
                            <h1 className="text-4xl font-bold text-black dark:text-slate-50">
                                <CountUp start={0} end={tutorCount} duration={8} />+
                            </h1>
                            <p className="text-gray-600 dark:text-slate-400">Experienced Tutors</p>
                        </div>
                    </Fade>

                    {/* Column 2 */}
                    <Fade duration={500} direction='down'>
                        <div className='border bg-white dark:bg-gray-800 py-4 rounded-xl'>
                            <h1 className="text-4xl font-bold text-black dark:text-slate-50">
                                <CountUp start={0} end={reviewsCount} duration={8} />+
                            </h1>
                            <p className="text-gray-600 dark:text-slate-400">5-star Reviews</p>
                        </div>

                        {/* Column 3 */}
                        <div className='border bg-white dark:bg-gray-800 py-4 rounded-xl'>
                            <h1 className="text-4xl font-bold text-black dark:text-slate-50">
                                <CountUp start={0} end={9} duration={8} />+
                            </h1>
                            <p className="text-gray-600 dark:text-slate-400">Languages Taught</p>
                        </div>
                    </Fade>

                    {/* Column 4 */}
                    <Fade duration={1000} direction='right'>
                        <div className='border bg-white dark:bg-gray-800 py-4 rounded-xl'>
                            <h1 className="text-4xl font-bold text-black dark:text-slate-50">
                                <CountUp start={0} end={usersCount} duration={8} />+
                            </h1>
                            <p className="text-gray-600 dark:text-slate-400">Active Users</p>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default CountUpComp;
