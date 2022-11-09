import React from 'react';
import { useEffect } from 'react';
import '../styles/Home.css';
import Lottie from 'lottie-react';
import lottieAnimation from '../assets/lottie-main.json';
import AOS from 'aos';
import 'aos/dist/aos.css'


const Home = () => {
    useEffect(()=>{
        AOS.init({duration: 3000})
    },[])

    return(
        <main>
            <div className='home-main' data-aos="zoom-in">
                <h2>HI!</h2>
                <h1>I am <span> Maximiliano</span></h1>
                <h4>(FullStack Developer)</h4>
            </div>
            <div>
                <Lottie animationData={lottieAnimation} className='lottie-animation-main' data-aos="zoom-in"/>
            </div>
        </main>
    )
}

export default Home;