import CountUp from 'react-countup';

const CountUpComp = () => {
    return (
        <div className="bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center gap-x-4">
                    {/* Column 1 */}
                    <div className='border bg-white py-4 rounded-xl'>
                        <h1 className="text-4xl font-bold text-black">
                            <CountUp start={0} end={50000} duration={2.5} />+
                        </h1>
                        <p className="text-gray-600">Experienced Tutors</p>
                    </div>
                    {/* Column 2 */}
                    <div className='border bg-white py-4 rounded-xl'>
                        <h1 className="text-4xl font-bold text-black">
                            <CountUp start={0} end={300000} duration={2.5} />+
                        </h1>
                        <p className="text-gray-600">5-star Reviews</p>
                    </div>
                    {/* Column 3 */}
                    <div className='border bg-white py-4 rounded-xl'>
                        <h1 className="text-4xl font-bold text-black">
                            <CountUp start={0} end={120} duration={2.5} />+
                        </h1>
                        <p className="text-gray-600">Languages Taught</p>
                    </div>
                    {/* Column 4 */}
                    <div className='border bg-white py-4 rounded-xl'>
                        <h1 className="text-4xl font-bold text-black">
                            <CountUp start={0} end={1000000} duration={2.5} />+
                        </h1>
                        <p className="text-gray-600">Active Users</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountUpComp;