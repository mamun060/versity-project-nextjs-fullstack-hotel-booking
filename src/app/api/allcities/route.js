import { hotelModel } from "@/database/models/hotels-model";
import { dbConnect } from "@/database/service/mongo";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    await dbConnect();
  
    try {
      const hotelCityList = await hotelModel.find().select("city").lean();
      return new NextResponse(JSON.stringify(hotelCityList), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch (error) {
      console.log("Error fetching cities", error);
      return new NextResponse(error.message, {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
}