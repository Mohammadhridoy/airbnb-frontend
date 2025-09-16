import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import React from 'react';
import { NavbarDropdownMenu } from '../NavbarDropdownMenu';
import NavBarDatePicker from './NavBarDatePicker';

const CheckInAndOut = () => {
    return (
     
            <DropdownMenu>
                <div className='space-x-16'>
  <DropdownMenuTrigger className='border-none '>

    <div className='space-y-1 cursor-pointer grow-1 '>
                           
                            <h1 className='text-[14px] font-bold  text-black' >Check in</h1>
                          <h1 className='text-[14px]  text-gray-400' >Add dates</h1>
                          
                        
                          
                         </div>
  </DropdownMenuTrigger>

  <DropdownMenuTrigger className='border-none'>

    <div className='space-y-1 cursor-pointer '>
                            <h1 className='text-[14px] font-bold  text-black' >Check out</h1>
                          <h1 className='text-[14px]  text-gray-400' >Add dates</h1>
                        
                         </div>
  </DropdownMenuTrigger>

</div>


  <DropdownMenuContent>
    <NavBarDatePicker/>
    
  </DropdownMenuContent>
</DropdownMenu>
            
      
    );
};

export default CheckInAndOut;