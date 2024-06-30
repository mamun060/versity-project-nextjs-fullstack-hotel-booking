import { hotelModel } from "@/database/models/hotels-model";
import { ratingModel } from "@/database/models/rating-model";
import { reviewModel } from "@/database/models/review-model";
import { bookingModel } from "@/database/models/booking-model";
import { isDateInbetween, replaceMongoIdInArray , replaceMongoIdInObject } from "@/utils/data-utils";


export async function getAllHOtels(){
    const hotels = await hotelModel
    .find()
    .select(["thumbNailUrl" , "name" , "highRate" , "lowRate" , "city" , "propertyCategory"])
    .lean()

    return replaceMongoIdInArray(hotels);
}

// find checkin and checkout data booking list query
// export async function findBooking(hotelId, checkin, checkout) {
//     const matches = await bookingModel
//       .find({ hotelId: hotelId.toString() })
//       .lean();

//     const found = matches.find((match) => {
//       return (
//         isDateInbetween(checkin, match.checkin, match.checkout) ||
//         isDateInbetween(checkout, match.checkin, match.checkout)
//       );
//     });

//     return found;
// }

export async function findBooking(hotelId, checkin , checkout) {
  const matches = await bookingModel.find({ hotelId: hotelId.toString() }).lean();

  console.log(`Checking bookings for hotelId: ${hotelId}`);
  console.log(`Checkin: ${checkin}, Checkout: ${checkout}`);
  console.log(`Matches found: ${matches.length}`);

  const found = matches.find((match) => {
      console.log(`Match Checkin: ${match.checkin}, Match Checkout: ${match.checkout}`);
      const isCheckinInBetween = isDateInbetween(checkin, match.checkin, match.checkout);
      const isCheckoutInBetween = isDateInbetween(checkout, match.checkin, match.checkout);
      console.log(`isCheckinInBetween: ${isCheckinInBetween}, isCheckoutInBetween: ${isCheckoutInBetween}`);
      return isCheckinInBetween || isCheckoutInBetween;
  });

  console.log(`Found: ${found ? 'Yes' : 'No'}`);
  return found;
}

export async function getAllHOtelsBySearchFilter(destination, checkin, checkout){
  const regex = new RegExp(destination, "i");
  const hotelsByDestination = await hotelModel
      .find({ city: { $regex: regex } })
      .select(["thumbNailUrl", "name", "highRate", "lowRate", "city", "propertyCategory"])
      .lean();

  let allHotels = hotelsByDestination;

  if (checkin && checkout) {

      allHotels = await Promise.all(
          allHotels.map(async (hotel) => {
            const found = await findBooking(hotel._id, checkin, checkout);
            if (found) {
              hotel["isBooked"] = true;
            } else {
              hotel["isBooked"] = false;
            }
            return hotel;
          })
      );
  }

  return replaceMongoIdInArray(allHotels);
}

export async function getHotelById(hotelId){
    const hotel = await hotelModel.findById(hotelId).lean();
    return replaceMongoIdInObject(hotel);
}

export async function getRatingForAHotel(hotelId){
    const rating = await ratingModel.find({hotelId: hotelId}).lean();
    return replaceMongoIdInArray(rating)
}

export async function getReviewForAHotel(hotelId){
    const review = await reviewModel.find({hotelId: hotelId}).lean();
    return replaceMongoIdInArray(review);
}