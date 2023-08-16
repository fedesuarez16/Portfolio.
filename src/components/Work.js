import React from 'react';
import {motion} from 'framer-motion'
import{fadeIn} from '../variants'
import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'

const Work = () => {
  return (
   <section id='work' className='section'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div 
           variants={fadeIn('right', 0.3)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once: false, amount: 0.3}}
           className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          {/* text */}
          <div>
            <h2 className=' h2 leading-tight tetx-accent'>
              My latest <br/>
              work 
            </h2>
            <p className='max-w-sm mb-16 text-gray-300'>Check out my Github repo and find out more about my projects! 
            </p>
            <button className='btn btn-sm'>
              view all projects
            </button>
          </div>
          {/* image */}
          <div className=' group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt=''/>
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
            <span className='text-gradient '>[React.js]</span>
            <a className='block'>This is a Dashboard that enables to administrates the buys and sells of a company</a>
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white font-semibold '> Admin Dashboard</span>
            </div>
          </div>
        </motion.div>

        <motion.div  
        variants={fadeIn('left', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}} className='flex-1 flex flex-col gap-y-6'
        >

        <div className=' group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt=''/>
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
            <span className='text-gradient '> [javascript] [Solidity] [HTML]  </span>
            <a className='block'>panel working on the celo blockchain. allows adding, paying, updating salary, and firing of employees. The contract utilizes an ERC20 token as the payment currency.</a>
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white font-semibold  '>Employee panel</span>
            </div>
          </div>


          {/* image */}
          <div className=' group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt=''/>
            {/* pretitle */}
            <div className='absolute  -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
            <span className='text-gradient '>[React]  [Hardhat]  [Solidity]</span>
            <a className='block text-sm'>IdentityNFTDapp is a decentralized application (DApp) built on the Celo blockchain that enables users to create, manage, and own their unique digital identities in the form of non-fungible tokens (NFTs). Each NFT represents a personalized digital identity, allowing users to express themselves, share thoughts, and showcase a photo.</a>
          
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white  font-semibold'>IdentityNFT Dapp</span>
            </div>
          </div>
        </motion.div>
        
      </div>
    </div>
   </section>
  )
};

export default Work;
