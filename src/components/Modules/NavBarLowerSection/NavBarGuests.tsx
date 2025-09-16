import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import React from 'react';


const NavBarGuests = () => {
    return (
        <div>
                       <DropdownMenu>
  <DropdownMenuTrigger className='border-none'>

    <div className='space-y-1 cursor-pointer'>
                             <h1 className='text-[14px] font-bold  text-black text-left' >Who</h1>
                          <h1 className='text-[14px]  text-gray-400' >Add guests</h1>
                          
                         
                         </div>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    

        



  </DropdownMenuContent>
</DropdownMenu>
            
        </div>
    );
};

export default NavBarGuests;