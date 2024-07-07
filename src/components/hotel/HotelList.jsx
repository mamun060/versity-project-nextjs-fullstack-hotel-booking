import HotelCard from "./HotelCard";
import { getAllHOtelsBySearchFilter } from "@/database/queries/hotels";
import NoHotelFound from "./NoHotelFound";

const HotelList = async ({ destination, checkin, checkout , category }) => {
  const allhotels = await getAllHOtelsBySearchFilter(destination, checkin, checkout, category);
  return (
    <div className="col-span-9">
      <div className="space-y-4">
        {
          allhotels.length > 0 ? (
            allhotels.map((hotel)=>(
              <HotelCard 
                key={hotel.id} 
                hotelInfo={hotel}
                checkin={checkin}
                checkout={checkout}
               />
            ))
          ) : (
            <NoHotelFound />
          )
        }
      </div>
    </div>
  );
};

export default HotelList;
