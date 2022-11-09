import React, {useEffect} from 'react';
import '../styles/Projects.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import { myProjects } from '../assets/projects'
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import AOS from 'aos';
import 'aos/dist/aos.css'

const Projects = () => {

    useEffect(()=>{
        AOS.init({duration: 3000})
    },[])

    return(
        <div id='container-projects'>
            <div className='projects-header' data-aos="fade-right">
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
                data-aos="fade-left"
                >   <div className='container'>
                    {myProjects.map(project => (                           
                                <SwiperSlide key={project.id} className='slide'>
                                    <div className='card-container'>
                                        
                                        <div className='card-text-container'>
                                            <h2 className='card-title'>{project.title}</h2>
                                            <img src={project.img} alt="" className='card-img'/>
                                            <h3 className='card-text'>{project.text}</h3>  
                                            <a href=""><button className='view-page-btn'>View Page!</button></a>
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