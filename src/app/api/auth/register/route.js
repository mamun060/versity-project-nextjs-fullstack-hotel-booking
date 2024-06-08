import { userModel } from "@/database/models/user-model";
import { dbConnect } from "@/database/service/mongo";
import { NextResponse, NextRequest } from "next/server";
import bcrypt from 'bcryptjs';

export const POST = async (reqeust) => {
    const {fname, lname, email, password} = await reqeust.json();
    await dbConnect();

    const hashPassword = await bcrypt.hash(password, 5);
    const newUser = {
        name: `${fname} ${lname}`,
        email,
        password: hashPassword
    }

    try {
        await userModel.create(newUser);
        return new NextResponse("User has been created", {
            status: 201
        });
    } catch (error) {
        return new NextResponse(error.message, {
            status: 500,
        })
    }

}