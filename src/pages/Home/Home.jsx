import React, { useEffect } from 'react';
import Banner from '../../components/Banner';
import CountUpComp from './CountUpComp';
import Category from './Category';


const Home = () => {

    return (
        <div>
            {/* banner */}
            <div className='hidden'>
                <Banner></Banner>
            </div>
            {/* count-Up-here */}
            <div>
                <CountUpComp></CountUpComp>
            </div>
            {/* category */}
            <div>
                <Category></Category>
            </div>
        </div>
    );
};

export default Home;