import { hotelModel } from "@/database/models/hotels-model";
import { replaceMongoIdInArray } from "@/utils/data-utils";

export async function getAllHOtels(){
    const hotels = await hotelModel
    .find()
    .lean()

    return replaceMongoIdInArray(hotels);
}