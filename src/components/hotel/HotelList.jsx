import HotelCard from "./HotelCard";
import { getAllHOtels, getAllHOtelsBySearchFilter } from "@/database/queries/hotels";

const HotelList = async ({ destination, checkin, checkout }) => {
  // const allhotels = await getAllHOtels();
  const allhotels = await getAllHOtelsBySearchFilter(destination, checkin, checkout);

  console.log(allhotels);

  return (
    <div className="col-span-9">
      <div className="space-y-4">
        {
          allhotels.map((hotel)=>(
            <HotelCard key={hotel.id} hotelInfo={hotel} />
          ))
        }
      </div>
    </div>
  );
};

export default HotelList;
