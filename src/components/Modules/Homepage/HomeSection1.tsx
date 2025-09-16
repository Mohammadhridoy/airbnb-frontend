import React from 'react';

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image';

import logo from '../../../../public/vercel.svg'


const HomeSection1 = () => {
    return (
        <div className='relative'>
            <h1 className=' text-[18px]  md:text-2xl font-semibold'>Popular homes in Kuala Lumpur  </h1>
            <div >
                 <Carousel
      opts={{
        align: "start",
      }}
      className="w-full py-10 md:py-5"
    >
      <CarouselContent className='w-[41%] h-[20%] '>
        {Array.from({ length: 8 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className='shadow-none  '>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  
                    <Image src={logo}
                                   alt='logo'
                                   width={200}
                                   
                                   className=' hidden md:block lg;block'
                                   />
                  
                </CardContent>
              </Card>
              <h1>dddddddddddd</h1>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='absolute top-0  md:left-[630px] lg:left-[850px] xl:left-[1260px] cursor-pointer' />
      <CarouselNext  className='absolute top-0 right-0 mt-4 md:mt-0 cursor-pointer' />
    </Carousel>

            </div>

            
        </div>
    );
};

export default HomeSection1;