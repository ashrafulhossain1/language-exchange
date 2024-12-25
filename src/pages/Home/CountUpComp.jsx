import axios from 'axios';
import { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const CountUpComp = () => {

    const [tutorCount, setTutorCount] = useState(0);
    const [usersCount, setUsersCount] = useState(0);
    const [reviewsCount, setReviewsCount] = useState(0);

    useEffect(() => {
        // tutorCount API call using axios
        axios.get('http://localhost:3000/tutorCount')
            .then(response => setTutorCount(response.data.tutorCount))
            .catch(error => console.error('Error fetching tutor count:', error));

        // usersCount API call using axios
        axios.get('http://localhost:3000/users')
            .then(response => setUsersCount(response.data.userCount))
            .catch(error => console.error('Error fetching users count:', error));

        // reviewsCount API call using axios
        axios.get('http://localhost:3000/reviewsCount')
            .then(response => setReviewsCount(response.data.reviewCount))
            .catch(error => console.error('Error fetching reviews count:', error));
    }, []);


    return (
        <div className="bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center gap-x-4">
                    {/* Column 1 */}
                    <div className='border bg-white py-4 rounded-xl'>
                        <h1 className="text-4xl font-bold text-black">
                            <CountUp start={0} end={tutorCount} duration={8} />+
                        </h1>
                        <p className="text-gray-600">Experienced Tutors</p>
                    </div>

                    {/* Column 2 */}
                    <div className='border bg-white py-4 rounded-xl'>
                        <h1 className="text-4xl font-bold text-black">
                            <CountUp start={0} end={reviewsCount} duration={8} />+
                        </h1>
                        <p className="text-gray-600">5-star Reviews</p>
                    </div>

                    {/* Column 3 */}
                    <div className='border bg-white py-4 rounded-xl'>
                        <h1 className="text-4xl font-bold text-black">
                            <CountUp start={0} end={9} duration={8} />+
                        </h1>
                        <p className="text-gray-600">Languages Taught</p>
                    </div>

                    {/* Column 4 */}
                    <div className='border bg-white py-4 rounded-xl'>
                        <h1 className="text-4xl font-bold text-black">
                            <CountUp start={0} end={usersCount} duration={8} />+
                        </h1>
                        <p className="text-gray-600">Active Users</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountUpComp;