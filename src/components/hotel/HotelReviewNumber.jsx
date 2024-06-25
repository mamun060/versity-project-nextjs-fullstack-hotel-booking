import { getReviewForAHotel } from "@/database/queries/hotels";
import Link from "next/link";

const HotelReviewNubmer = async ({id}) => {
    const review = await getReviewForAHotel(id);

    return ( 
        <>
            {
                review?.length === 0 ? (
                    <Link href="#" className="underline">Be the first one to review</Link>
                ) : (
                    <Link href={`/hotels/${id}/reviews`} className="underline">{review.length} Reviews</Link>
                )
            }
        </>
     );
}
 
export default HotelReviewNubmer;