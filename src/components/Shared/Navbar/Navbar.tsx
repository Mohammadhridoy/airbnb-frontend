import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../../../public/airbnb.png'
import { Button } from '@/components/ui/button';
import { NavbarHost } from '@/components/Modules/NavbarHost';
import { NavbarTranslator } from '@/components/Modules/NavbarTranslator';
import { NavbarDropdownMenu } from '@/components/Modules/NavbarDropdownMenu';

const Navbar = () => {
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
           <div className=' text-center' >
           <div >
              
         
           </div>
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