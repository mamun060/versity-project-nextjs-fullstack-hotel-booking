import Gallery from "@/components/hotel/details/Gallery"
import Overview from "@/components/hotel/details/Overview"
import Summary from "@/components/hotel/details/Summary"
import { getHotelById } from "@/database/queries/hotels"

const HotelDetailsPage = async ({params: {id}, searchParams: {checkin, checkout}}) => {
  const hotelInfo = await getHotelById(id, checkin, checkout);

  return (
    <>
        <Summary hotelInfo={hotelInfo} />
        <Gallery thumbnail={hotelInfo?.thumbNailUrl} gallery={hotelInfo?.gallery} />
        <Overview overview={hotelInfo?.overview} />
    </>
  )
}

export default HotelDetailsPage