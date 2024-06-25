import { hotelModel } from "@/database/models/hotels-model";
import { ratingModel } from "@/database/models/rating-model";
import { reviewModel } from "@/database/models/review-model";
import { replaceMongoIdInArray , replaceMongoIdInObject } from "@/utils/data-utils";

export async function getAllHOtels(){
    const hotels = await hotelModel
    .find()
    .select(["thumbNailUrl" , "name" , "highRate" , "lowRate" , "city" , "propertyCategory"])
    .lean()

    return replaceMongoIdInArray(hotels);
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