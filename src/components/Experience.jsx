import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import {motion} from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import {styles} from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const ExperienceCard=({experience})=>(
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',}}>
  <VerticalTimelineElement 
    contentStyle={{background: 'rgba(75, 0, 130, 0.8)',color:'#FFA500',boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'}}
    contentArrowStyle={{borderRight:'7px solid #232631'}}
    style={{marginBottom: '20px'}}

    iconStyle={{background:experience.iconBg}}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>

      <p className="text-secondary text-[16px] font-semibold"
        style={{margin:0}}
      >{experience.company_name}</p>
    </div>

    <ul className="mt-5 list-none ml-5 space-y-2">
      {experience.points.map((point,index)=>(
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px]  tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>

    
  </VerticalTimelineElement>
  </div>
)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>How it</p> */}
        <h2 className={styles.sectionHeadText}>How it 
          <span className="bg-gradient-to-r from-yellow-400 to-pink-500 text-transparent bg-clip-text"> Works ?</span>
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline layout="1-column-left">
          {experiences.map((experience,index)=>(
            <ExperienceCard key={index} experience={experience}/>
          ))}
        </VerticalTimeline>

      </div>
    </>
  )
}

export default SectionWrapper(Experience,"work")