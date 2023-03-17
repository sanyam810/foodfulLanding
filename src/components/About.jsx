import React from 'react'
import Tilt from 'react-parallax-tilt'
import {motion} from 'framer-motion'

import { styles } from '../styles';
import { services } from '../constants';
import {fadeIn,textVariant} from '../utils/motion'; 
import { SectionWrapper } from '../hoc';

const ServiceCard=({index,title,icon,desc})=>{
  return (
    <Tilt className="xs:w-[250px] w-full">
      
      <motion.div
        variants={fadeIn("right","spring",0.5*index,0.75)}
        className="w-full bg-gradient-to-r from-yellow-400 to-pink-600 p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max:45,
            scale:1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px]
          py-5 px-12 min-h-[280px] flex justify-evenly
          items-center flex-col"
        >
          
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
          <h3 className="mt-2 text-white text-[16px] font-bold text-center">
            {title}
          </h3>
          
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What's the </p>
        <h2 className={`${styles.sectionHeadText} `}>
          <span className=" bg-gradient-to-r from-yellow-400 to-pink-500 text-transparent bg-clip-text">
          Challenge?
          </span>
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("","",0.1,1)}
        className="mt-4 text-secondary text-[17px]
        max-w-3xl leading-[30px]"
      >
        Reducing food wastage is an essential sustainability practice that can help conserve resources, 
        reduce greenhouse gas emissions, promote economic development, and address issues of food security and 
        social justice. <span className='bg-gradient-to-r from-yellow-400 to-pink-500 text-transparent bg-clip-text'>FoodFul is a service where users can give away or get leftover food in their community for free,
        aiming at household and food waste.</span> It does this by connecting neighbours by sharing spare food with others who 
        wish to take up that food. By giving away or getting leftover food in your community,
        you can help reduce food waste and provide food to those who need it most.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-36">
        {services.map((service,index)=>(
          <ServiceCard key={service.title} index={index}
            {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About,"about")