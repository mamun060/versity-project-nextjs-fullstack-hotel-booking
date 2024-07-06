import { bookingModel } from "@/database/models/booking-model"
import { replaceMongoIdInArray } from "@/utils/data-utils";

export const getAllBooking = async () => {
    const booking = await bookingModel.find().lean();
    return replaceMongoIdInArray(booking)
}

// get booking by userId 
export const getBookingsByUser = async (userId) => {
    const userBookings = await bookingModel.find({userId: userId}).lean();
    return replaceMongoIdInArray(userBookings);
}