import { bookingModel } from "@/database/models/booking-model"
import { replaceMongoIdInArray } from "@/utils/data-utils";

export const getAllBooking = async () => {
    const booking = await bookingModel.find().lean();
    return replaceMongoIdInArray(booking)
}