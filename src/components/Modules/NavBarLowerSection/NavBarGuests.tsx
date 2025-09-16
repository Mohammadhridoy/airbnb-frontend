import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import React from 'react';
import { Counter } from '@/components/animate-ui/components/animate/counter';
import { Separator } from '@/components/ui/separator';


const NavBarGuests = () => {
    return (
        <div>
                       <DropdownMenu >
  <DropdownMenuTrigger className='border-none'>

    <div className='space-y-1 cursor-pointer'>
                             <h1 className='text-[14px] font-bold  text-black text-left' >Who</h1>
                          <h1 className='text-[14px]  text-gray-400' >Add guests</h1>
                          
                         
                         </div>
  </DropdownMenuTrigger>
  <DropdownMenuContent className='mt-3' >
    <div className='p-8'>
        {/* secton-01 */}
        <div className='flex justify-between align-middle gap-16'>
            <div>
                <h1 className='font-bold'>Adults</h1>
                <h4 className='text-gray-400'>Ages 13 or above</h4>
            </div>
            <div>
                <Counter />
            </div>
        </div>
        <Separator className="my-6" />

        {/* Section-02 */}
        <div className='flex justify-between align-middle gap-16'>
            <div>
                <h1 className='font-bold'>Children</h1>
                <h4 className='text-gray-400'>Ages 2 - 12</h4>
            </div>
            <div>
                <Counter />
            </div>
        </div>
         <Separator className="my-4" />

         {/* Section-03 */}
         <div className='flex justify-between align-middle gap-16'>
            <div>
                <h1  className='font-bold'>Infants</h1>
                <h4 className='text-gray-400'>Under 2</h4>
            </div>
            <div>
                <Counter />
            </div>
        </div>
         <Separator className="my-4" />
          {/* Section-04 */}
          <div className='flex justify-between align-middle gap-16'>
            <div>
                <h1 className='font-bold'>Pets</h1>
                <h4 className='text-gray-400'>Bringing a service animal?</h4>
            </div>
            <div>
                <Counter />
            </div>
        </div>




    </div>
    

        



  </DropdownMenuContent>
</DropdownMenu>
            
        </div>
    );
};

export default NavBarGuests;