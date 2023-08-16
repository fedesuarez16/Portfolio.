import React from 'react';
import Image from '../assets/profile.png'
import {FaGithub, FaYoutube, FaDribbble, FaIgloo, FaGit} from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'

const Banner = () => {
  return (
  <section id='home' className='min-h-[85vh] lg:min-h-[78vh] flex items-center'>
    <div className='container mx-auto '>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        {/* text */}
       <div className='flex-1 text-center font-secondary lg:text-left'>
        <motion.h1 variants={fadeIn('up',0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}}  className='text-[50px] font-bold leading-[0.8] lg:text-[110px]'>
        FEDERICO <span>SUAREZ</span>
        </motion.h1>
        <motion.div variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}}  className='mb-6 text-[36px]lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
          <span className='mr-4 text-[25px] font-bold leading-[0.8] lg:text-[50px] '>I am a</span>
          <TypeAnimation sequence={[
            'Blockchain developer',
            2000,
            'Front-end developer',
            2000,
            'React developer',
            2000,
            'Web3 developer',
            2000,
            
          ]}
          speed={50}
          className='text-accent lg:text-[50px]'
          wrapper='span'
          repeat={Infinity}
          />
          <motion.p variants={fadeIn('up',0.6)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}}   className='mb-8 text-gray-300 max-w-lg mx-auto lg:mx-0'>
          I'm a skilled <strong className='text-white'>#React </strong> <strong className="text-white">#front-end</strong> and <strong className="text-white">#Web3</strong>  developer, with a passion to create the best user experiences with the best technologies & shape the future of web apps.  </motion.p>
          <motion.div variants={fadeIn('up',0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}}   className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            <button className='btn btn-lg'> Contact me </button>
            <a href='#' className='text-gradient btn-link'>My portfolio
            </a>
          </motion.div>
          {/* socials */}
          <motion.div  variants={fadeIn('up',0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}}  className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
          <a href='#'>
              <FaYoutube/>
            </a>
            <a href='#'>
              <FaGithub/>
            </a>
            <a href='#'>
              <FaDribbble/>
            </a>
          </motion.div>
        </motion.div>
        </div>
        <motion.div  variants={fadeIn('down',0.5)} initial="hidden" whileInView={'show'}   className='hidden lg:flex flex-l max-w-[320px] lg:max-w-[482px] '> 
          <img className="rounded-full" src={Image} alt=''></img>
        </motion.div>
      </div>
    </div>
  </section>
  )
};

export default Banner;
