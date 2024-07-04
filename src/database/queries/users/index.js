import { userModel } from "@/database/models/user-model";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/data-utils";

export async function getUserByEmail(email){
    const users = await userModel.find({ email: email }).lean();

    return replaceMongoIdInObject(users[0]);
}