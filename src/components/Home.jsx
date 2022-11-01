import React from 'react';
import '../styles/Home.css';
import Lottie from 'lottie-react';
import lottieAnimation from '../assets/lottie-main.json';

const Home = () => {

    return(
        <main>
            <div className='home-main'>
                <h2>HI!</h2>
                <h1>I am <span> Maximiliano</span>,</h1>
                <h4>(FullStack Developer)</h4>
            </div>
            <div>
                <Lottie animationData={lottieAnimation} className='lottie-animation-main'/>
            </div>
        </main>
    )
}

export default Home;