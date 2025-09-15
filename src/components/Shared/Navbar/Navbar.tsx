"use client"
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../../public/airbnb.png'
import { NavbarHost } from '@/components/Modules/NavbarHost';
import { NavbarTranslator } from '@/components/Modules/NavbarTranslator';
import { NavbarDropdownMenu } from '@/components/Modules/NavbarDropdownMenu';
import Lottie from "lottie-react";
import  homeGif from "../../../../public/Home.json"  
import experienceGif from "../../../../public/Hot Air Balloon.json"
import servicesGif from "../../../../public/ServisHero Loading.json"
import { usePathname } from 'next/navigation';

import * as motion from "motion/react-client"
import { useEffect, useRef } from 'react';


const Navbar = () => {
    const pathname = usePathname()
   
   

    const menuItems = [
        { name:"Homes", href:"/", animation: homeGif},
         { name:"Experiences", href:"/experiences", animation: experienceGif},
         {name:"Services", href:"/services", animation: servicesGif}

    ]



    return (
        <div className=' border-b'>
            {/* Navbar upper section */}
            <div className='md:flex items-center justify-between mx-auto md:px-5 md:py-3'>
                 {/* Navbar left*/}


               <div >
                  <Link href='/'>
                 <Image src={logo}
                 alt='logo'
                 width={180}
                 
                 className=' hidden md:block lg;block'
                 />
                 
                 </Link>
               </div>
            
            {/* Navbar center */}
           <div className='grid grid-cols-3' >
          
            {
              menuItems.map((item, index)=>{
                const isActive = pathname === item.href
                const lottieRef = useRef<any>(null)

                useEffect(()=>{
                  if(isActive && lottieRef.current){
                    lottieRef.current.stop()
                    lottieRef.current.play()
                  }

                }, [isActive])


                return(
               
                      <Link 
                  
                key={index}
                 href={item.href} 
                 className= {
                  
                    `relative  flex  flex-row justify-center items-center 
                 `
                 }
                 >
             
            
                       <Lottie
                   lottieRef={lottieRef}
                animationData={item.animation}
                loop={false}
                autoPlay={false}
                className={`w-14 h-14
                ${!isActive?  "hover:scale-150 transition-transform" : ""}
                `}
                />

                
              <h1 className={
                `text-base font-semibold
              hover:text-gray-400
              ${isActive?"text-black": "text-gray-400"}
              `
              }>{item.name}</h1>


              {
                isActive && (
                <motion.span
                 layoutId='underline'
                  className={`
                      absolute left-0 -bottom-1 h-[3px] bg-black w-[100%] rounded-full
                     
                    `}
                    transition={{type:'spring', stiffness:600, damping:30}}
                  />
                )
              }

              
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