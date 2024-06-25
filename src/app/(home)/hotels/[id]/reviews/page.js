import Navbar from "@/components/Navbar";
import { getReviewForAHotel } from "@/database/queries/hotels";

const Reviews = async ({params}) => {
    const id = params.id
    const reviews = await getReviewForAHotel(id);
    return ( 
        <div className=" flex justify-center items-center align-middle pt-[150px] flex-col gap-3">
            {
                reviews?.map((review)=>(
                    <p key={review.id} className=" text-black py-1 px-3  text-xl shadow">{review?.review}</p>
                ))
            } 
        </div>
     );
}
 
export default Reviews;