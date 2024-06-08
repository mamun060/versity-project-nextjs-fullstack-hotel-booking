import mongoose, { Schema } from "mongoose";


const amenitiSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    price: {
        required: false,
        type: Number
    },
    instructions: {
        required: false,
        type: String
    },
    hours: {
        required: false,
        type: String
    }
})

export const amenitiModel = mongoose.models.amenities ?? mongoose.model("amenities", amenitiSchema);