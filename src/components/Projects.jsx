import React from 'react';
import '../styles/Projects.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import { myProjects } from '../assets/projects'
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import slidimg from '../assets/react-logo.png'

const Projects = () => {

    return(
        <div id='container-projects'>
            <div className='projects-header'>
                <h2>SOME PROJECTS</h2>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                >   <div className='container'>
                    {myProjects.map(project => (                           
                                <SwiperSlide key={project.id} className='slide'>
                                    <div className='card-container'>
                                        
                                        <div className='card-text-container'>
                                            <h2 className='card-title'>{project.title}</h2>
                                            <img src={project.img} alt="" className='card-img'/>
                                            <h3 className='card-text'>{project.text}</h3>  
                                        </div>       
                                    </div>                    
                                </SwiperSlide>                                                  
                    ))}
                    </div>
                ...
                </Swiper>
                
        </div>
    )
}

export default Projects