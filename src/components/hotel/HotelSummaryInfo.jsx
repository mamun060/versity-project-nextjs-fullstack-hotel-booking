import Link from "next/link";
import HotelRating from "./HotelRating";
import HotelReviewNubmer from "./HotelReviewNumber";
import { findBooking } from "@/database/queries/hotels";
import { getAllBooking } from "@/database/queries/bookings";

const HotelSummaryInfo = async ({fromListPage, hotelInfo}) => {
  // const booking = await findBooking("66263526f50c2e548501f285", "2024-06-26", "2024-06-29");
  const booking = await getAllBooking();
  console.log(booking);



  
  return (
    <>
      <div className={fromListPage ? "flex-1" : "flex-1 container"}>
        <h2 className={fromListPage ? "font-bold text-lg" : "font-bold text-2xl"}>{hotelInfo?.name}</h2>
        <p>📍 {hotelInfo?.city}</p>
        <div className="flex gap-2 items-center my-4">
          <HotelRating id={hotelInfo?.id} />
          <HotelReviewNubmer id={hotelInfo?.id} />
          {
            hotelInfo?.isBooked && <span>Sold Out</span>
          }
          {/* <span>Sold Out</span> */}
          
        </div>
          <div>
            <span className=" bg-yellow-400 p-1 rounded-sm shadow-md">{hotelInfo?.propertyCategory} Star Property</span>
          </div>
      </div>

      <div className="flex flex-col gap-2 items-end justify-center">
        <h2 className="text-2xl font-bold text-right">${(hotelInfo?.highRate + hotelInfo?.lowRate) / 2} /night</h2>
        <p className=" text-right">Per Night for 1 Room</p>
        {
          fromListPage ? (<Link href={`/hotels/${hotelInfo?.id}`} className="btn-primary ">Details</Link>) 
          : (<button className="btn-primary ">Book</button>)
        }
      </div>
    </>
  );
};

export default HotelSummaryInfo;
