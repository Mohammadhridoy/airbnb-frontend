import React, { useState } from 'react';
import {
  Tabs,
  TabsList,

} from '@/components/animate-ui/components/animate/tabs';
import { Button } from '@/components/ui/button';
import {
  Card,

} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import NavBarDatePicker from './NavBarDatePicker';
import NavBarGuests from './NavBarGuests';
import CheckInAndOut from './CheckInAndOut';





const NavbarSection = () => {


    return (
        <div className='w-full  flex justify-center items-center'>
          
      
            <Tabs defaultValue=" where "
             className='w-full max-w-4xl relative ' >

                <Card className='w-full h-[4.5rem] rounded-full shadow-lg border flex items-center justify-between px-2 py-1'>
                      <TabsList className='flex gap-2 w-full justify-between bg-transparent space-x-2 mt-4  md:pl-4  ' >
                       

                        {/* Where section  */}
                        
                        <div className='cursor-pointer flex-1 '>
                          <h1 className='text-[14px] pl-3 font-bold text-black   ' >Where</h1>
                           
                           <Input type='search' className='font-semibold shadow-none pb-2 border-none focus-visible:ring-0 focus:outline-none '
                            placeholder="Search destinations" />
                         
                             
                           </div>
                              <div className='flex-1'>
                                     <CheckInAndOut />
                              </div>
                         



                            {/* check out */}
                           
                            {/* who  */}
                             
                           <div className=' flex-1 cursor-pointer flex  justify-between align-middle '>
                         
                         <NavBarGuests></NavBarGuests>
                                <Button size="icon"
                        className='rounded-full  bg-red-500 hover:bg-red-600 text-white ml-2 z-50 cursor-pointer'>
                            <Search className='h-8 w-8'/>
                        </Button>
                          
                            </div>
                       
                          


                       

                  
                      
                    </TabsList>
                </Card>




      </Tabs>
       
           
            
        </div>
    );
};

export default NavbarSection;