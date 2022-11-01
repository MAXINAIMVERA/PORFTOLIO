import React from 'react';
import '../styles/Projects.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  
    return(
        <div id='container-projects'>
            <div>
                <h2>SOME PROJECTS</h2>
            </div>
            <Slider {...settings} id='slider'>
                <div>
                    <div className='slider-div'>
                        <h3>PROJECT</h3>
                    </div>
                </div>
                <div>
                    <div className='slider-div'>
                        <h3>PROJECT</h3>
                    </div>
                </div>
                <div>
                    <div className='slider-div'>
                        <h3>PROJECT</h3>
                    </div>
                </div>
                <div>
                    <div className='slider-div'>
                        <h3>PROJECT</h3>
                    </div>
                </div>
                <div>
                    <div className='slider-div'>
                        <h3>PROJECT</h3>
                    </div>
                </div>
                
            </Slider>
        </div>
    )
}

export default Projects