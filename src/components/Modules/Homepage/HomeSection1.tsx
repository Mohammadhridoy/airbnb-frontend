

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image';
import { Heart, Star } from 'lucide-react';




interface listing  {
  _id: string
  title: string
  description: string
  city: string
  country: string
  pricePerNight: number
  guests: number
  bedrooms: number
  bathrooms: number
  amenities: string[]
  rating: number
  images: string[]
}



interface props {
   arrayOfKualaLumpur: listing[]
}



const HomeSection1 = ({arrayOfKualaLumpur}:props) => {




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
      <CarouselContent className='w-[47%] h-[20%] '>
        {arrayOfKualaLumpur.map(( items:listing ) => (
          
         

          <CarouselItem key={items?._id} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className='shadow-none py-0  relative '>
                <CardContent className="flex aspect-square items-center justify-center px-0">

                    <img 
                    className='w-full h-full  rounded-md '
                    src={items.images[0]} alt="" />

                 
                </CardContent>
                <div className="absolute top-2 left-1 hidden  xl:flex justify-between align-middle gap-12">
                  <h1 className="text-[12px] w-24 h-7 text-black p-1 rounded-full bg-gray-100  ">Guest favourite</h1>
                  <Heart className="<Heart />" />
                </div>
              </Card>
              <div className='py-2'>
                <h1 className='font-semibold '>{items.title}</h1>
                  <div className='flex gap-2'>
                     <h1>{`$${items.pricePerNight}`}</h1>
              <h5 className='flex gap-2 align-middle'><Star className='w-5'></Star>  {items.rating}</h5>
                  </div>
              </div>
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