import React, { useEffect } from 'react';
import Banner from '../../components/Banner';
import CountUpComp from './CountUpComp';


const Home = () => {

    return (
        <div>
            {/* banner */}
            <div className='hidden'>
                <Banner></Banner>
            </div>
            <div>
                <CountUpComp></CountUpComp>
            </div>
        </div>
    );
};

export default Home;