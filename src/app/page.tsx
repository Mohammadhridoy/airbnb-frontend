
import HomeSection1 from '@/components/Modules/Homepage/HomeSection1';
import MainHome from '@/components/Modules/Homepage/MainHome';
import React from 'react';

const HomePage = async () => {


    const response = await fetch('http://localhost:5000/api/data')
    const  allData = await response.json()
  

    return (
        <div className=' py-5 px-4 md:px-8 lg:px-12 md:py-9'>
      
        <MainHome listings={allData?.data} />
        </div>
    );
};

export default HomePage;