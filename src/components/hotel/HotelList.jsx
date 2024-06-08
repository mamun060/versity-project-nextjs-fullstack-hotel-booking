import HotelCard from "./HotelCard";
import { getAllHOtels } from "@/database/queries/hotels";

const HotelList = async () => {
  const allhotels = await getAllHOtels();
  // console.log(allhotels);

  return (
    <div className="col-span-9">
      <div className="space-y-4">
       <HotelCard />
      </div>
    </div>
  );
};

export default HotelList;
