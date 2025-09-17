import HomeSection1 from "./HomeSection1";
import HomeSection2 from "./HomeSection2";



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
    listings:listing[]
}



const MainHome = ({listings}:props) => {

    

    const arrayOfKualaLumpur = listings.filter((items )=> items.city.toLowerCase() =="kuala lumpur")
  
     const arrayOfBangkok = listings.filter((items )=> items.city.toLowerCase() =="bangkok")
    
    


    return (
        <div>
            <HomeSection1  arrayOfKualaLumpur={arrayOfKualaLumpur} />
            <HomeSection2  arrayOfKualaLumpur={arrayOfBangkok}/>
        </div>
    );
};

export default MainHome;