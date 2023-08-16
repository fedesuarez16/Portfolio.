import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion'
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  return( 
  <section id='about' ref={ref} className='section'>
    <div className='container mx-auto'>
      <div className='flex flex-colgap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/* img */}
        <motion.div
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
         className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>

        </motion.div>
        {/* text */}
        <motion.div
           variants={fadeIn('left', 0.5)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once: false, amount: 0.3}}
   
         className='flex-1'
         >
          <h2 className='h2 text-accent'>About me </h2>
          <p className='text-xl font-semibold mb-4'> 
          Passionate React/Web3 developer skilled in crafting exceptional user experiences and integrating blockchain technology. Expertise in JavaScript, React, and Web3 frameworks. Committed to pushing boundaries and revolutionizing web development.     </p>
          <p className='mb-6'>
         <strong>Stack:</strong> JavaScript, Node.js, React.js, Typescript, Solidity, Web3, HTML, CSS, C++, Git/github, Firebase
          </p>
          {/* stats */}
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? 
                <CountUp start={0} end={8} duration={3}/> :

              null }  
              
                      
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Years of <br/>
                Experience
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
               {inView ? 
                <CountUp start={0} end={13} duration={3}/> :

              null }   
               k+            
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Projects <br/>
                completed
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
               {inView ? 
                <CountUp start={0} end={30} duration={3}/> :

              null }              
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                satisfied <br/>
                clients
              </div>
            </div>
          </div>
          <div className='flex gap-x-8 items-center'>
            <button className='btn btn-lg'>Contact me </button>
            <a href='#' className='text-gradient btn-link'>My portfolio</a>
          </div>
        </motion.div>
      </div>

    </div>

  </section>
  )
};

export default About;
