import React from 'react'
import Tilt from 'react-tilt'
import {motion} from 'framer-motion'

import { styles } from '../styles';
import { services } from '../constants';
import {fadeIn,textVariant} from '../utils/motion'; 
import { SectionWrapper } from '../hoc';

const ServiceCard=({index,title,icon})=>{
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right","spring",0.5*index,0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
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
          <h3 className="text-white text-[20px] font-bold text-center">
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
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("","",0.1,1)}
        className="mt-4 text-secondary text-[17px]
        max-w-3xl leading-[30px]"
      >
        I enjoy creating digital art with software such as a 
        blender and have created an Instagram profile displaying my artwork.
        I'm also familiar with programming languages such as C++ and Java,
        and I'm presently learning Solidity, DevOps, and Web Development.
        I'm also learning German and have completed till A2 level at Goethe Institut.
        I love to take on challenges and explore new things every day. 
        At college, I'm pursuing my bachelor's in Bioinformatics (currently in 2nd year).
        I have always been fascinated by the world of computers but also by genetics and am grateful to pursue this field of study.
        I hope that I bring great changes in every aspect in the near future.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service,index)=>(
          <ServiceCard key={service.title} index={index}
            {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About,"about")