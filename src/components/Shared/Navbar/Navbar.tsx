"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../../../public/airbnb.png'
import { NavbarHost } from '@/components/Modules/NavbarHost';
import { NavbarTranslator } from '@/components/Modules/NavbarTranslator';
import { NavbarDropdownMenu } from '@/components/Modules/NavbarDropdownMenu';
import Lottie from "lottie-react";
import  homeGif from "../../../../public/Home.json"  
import experienceGif from "../../../../public/Hot Air Balloon.json"
import servicesGif from "../../../../public/ServisHero Loading.json"
import { usePathname } from 'next/navigation';
import { useInView } from 'react-intersection-observer';

const Navbar = () => {
    const pathname = usePathname()

    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.3
    })

    const menuItems = [
        { name:"Homes", href:"/", animation: homeGif},
         { name:"Experiences", href:"/experiences", animation: experienceGif},
         {name:"Services", href:"/services", animation:servicesGif}

    ]

    return (
        <div className='w-full border-b'>
            {/* Navbar upper section */}
            <div className='md:flex items-center justify-between mx-auto md:px-5 md:py-3'>
                 {/* Navbar left*/}


               <div className=''>
                  <Link href='/'>
                 <Image src={logo}
                 alt='logo'
                 width={180}
                 
                 className=' hidden md:block lg;block'
                 />
                 
                 </Link>
               </div>
            
            {/* Navbar center */}
           <div className=' grid grid-cols-3 gap-3 py-4' >
          
            {
              menuItems.map((item, index)=>{
                const isActive = pathname === item.href

                return(
                 <Link 
                 ref={ref} 
                 key={index}
                 href={item.href} 
                 className= {
                    ` relative  flex  flex-row justify-center items-center 
                 
                 `
                 }
                 >
             
             {inView && (
                   <Lottie
                animationData={item.animation}
                loop={false}
                className={`w-14 h-14
                ${isActive?" ":"hover:scale-150 transition-transform"}
                `}
                />
             )}

                
              <h1 className={
                `text-base font-semibold mt-2 
              hover:text-gray-400
              ${isActive?"text-black": "text-gray-400"}
              `
              }>{item.name}</h1>
              <span
              className={`
                absolute bottom-0 left-0 h-[2px] bg-black transition-all 
              duration-200 ease-in-out 
                ${isActive? 'w-full': 'w-0 hover:w-full'}
                `}
              />
              
              </Link>
              )
              })
            }
          
           </div>



            {/* Navbar right*/}
            <div className='lg:pr-8 flex flex-row gap-5 align-middle justify-start ' >
                {/* host */}
                <div>
                    <NavbarHost/>

                </div>
                {/* language Translator */}
                <div>
                    <NavbarTranslator/>
                </div>
                {/* navigation Icon */}
                <div>
                    <NavbarDropdownMenu/>
                </div>
            </div>
            </div>


            {/* search function */}
            {/* Navbar lower section */}
            <div className='md:flex justify-center align-middle hidden md:py-5'>
                ddddddddddddddddddddddddddddddddddd
                ddddddddddddddddddddddddddddddd
                ddddddddddddddddddddddddddddddd
                ddddddddddddddddddddddddddddddd
                
             </div>
          

          
            
        </div>
    );
};

export default Navbar;