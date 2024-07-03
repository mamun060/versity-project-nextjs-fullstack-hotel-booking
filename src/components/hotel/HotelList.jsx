import HotelCard from "./HotelCard";
import { allCities, getAllHOtelsBySearchFilter } from "@/database/queries/hotels";

const HotelList = async ({ destination, checkin, checkout }) => {
  const allCity = await allCities();
  const allhotels = await getAllHOtelsBySearchFilter(destination, checkin, checkout);

  console.log(allCity);

  return (
    <div className="col-span-9">
      <div className="space-y-4">
        {
          allhotels.map((hotel)=>(
            <HotelCard 
              key={hotel.id} 
              hotelInfo={hotel}
              checkin={checkin}
              checkout={checkout}
             />
          ))
        }
      </div>
    </div>
  );
};

export default HotelList;
