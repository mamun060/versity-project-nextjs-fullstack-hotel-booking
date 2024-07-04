import HotelCard from "./HotelCard";
import { getAllHOtelsBySearchFilter } from "@/database/queries/hotels";

const HotelList = async ({ destination, checkin, checkout }) => {
  const allhotels = await getAllHOtelsBySearchFilter(destination, checkin, checkout);

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
