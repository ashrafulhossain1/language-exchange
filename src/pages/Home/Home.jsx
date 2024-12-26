import React, { useEffect } from 'react';
import Banner from '../../components/Banner';
import CountUpComp from './CountUpComp';
import Category from './Category';
import FAQ from './FAQ';
import Steps from './Steps';


const Home = () => {

    return (
        <div>
            {/* banner */}
            <div >
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
            {/* How Its Works */}
            <div>
            <Steps></Steps>
            </div>
            {/* faq */}
            <div>
                <FAQ></FAQ>
            </div>
        </div>
    );
};

export default Home;