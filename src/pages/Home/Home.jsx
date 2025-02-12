import React, { useEffect } from 'react';
import Banner from '../../components/Banner';
import CountUpComp from './CountUpComp';
import Category from './Category';
import FAQ from './FAQ';
import Steps from './Steps';
import { Helmet } from 'react-helmet-async';
import SpecialOffer from '../../components/SpecialOffer';


const Home = () => {

    return (
        <div>
            <Helmet>
                <title>Home | Learn Language</title>
            </Helmet>
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
            <div>
                <SpecialOffer></SpecialOffer>
            </div>
            {/* faq */}
            <div>
                <FAQ></FAQ>
            </div>
        </div>
    );
};

export default Home;