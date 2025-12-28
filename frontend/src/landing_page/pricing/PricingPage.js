import React from 'react'
import Hero from './Hero';
import OpenAccount from '../OpenAccount';
import Brokerage from './Brokerage';

function AboutPage() {
    return(
        <>
            <Hero />
            <Brokerage/>
            <OpenAccount />
        </>
    );
}

export default AboutPage;