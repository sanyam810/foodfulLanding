import {motion} from 'framer-motion';

import {styles} from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`
      ${styles.paddingX} absolute inset-0
      top-[120px] max-w-7xl mx-auto flex 
      flex-row items-start gap-5`}
      >
        <div className="flex flex-col
          justify-center items-center mt-5 ml-56">
            {/* <div className="w-5 h-5 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"/>
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>   */}
        </div> 
        <div className="flex flex-col justify-center items-center">
          <h1 className={`${styles.heroHeadText}  text-4xl bg-gradient-to-r from-yellow-400 to-pink-500 text-transparent bg-clip-text`}>
              Food
              <span className={`${styles.heroHeadText}  text-4xl text-white`}>
                Ful
              </span>
          </h1>
          
            
          <h1 className={`${styles.heroSubText}  mt-4 text-white-100 ` }>
            Zero Hunger. Zero Poverty. Sustainable Cities.<br className="sm:block hidden"/>
            
          </h1>
          
    
          
        </div>
        
        
         
        
      </div>
      <ComputersCanvas className="mt-10"/>
      
      
      <div className="absolute xs:bottom-10 bottom-32
       w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl
           border-4 border-violet-gradient
           flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y:[0,24,0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full  bg-white"
            />
          </div>
        </a>
      </div>

    </section>
  )
}

export default Hero 