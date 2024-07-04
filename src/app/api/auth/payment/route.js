import { bookingModel } from "@/database/models/booking-model";
import { dbConnect } from "@/database/service/mongo";
import { NextResponse, NextRequest } from "next/server";
import mongoose from "mongoose";

export const POST = async (request) => {
    const { hotelId, userId, checkin, checkout} = await request.json();
    await dbConnect();
    
    // received payload data 
    const payload = {
        hotelId: new mongoose.Types.ObjectId(hotelId),
        userId: new mongoose.Types.ObjectId(userId),
        checkin: checkin,
        checkout: checkout
    }

    // check insertion 
    try {
        await bookingModel.create(payload);
        return new NextResponse("A New Booking Has Been Added Successfully", {
            status: 201,
        })
    } catch (error) {
        return new NextResponse(error.message, {
            status: 500,

        })
    }
}