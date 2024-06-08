import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/database/queries/mongoClientPromise";
import { userModel } from "@/database/models/user-model";

export const {
    handlers: {GET , POST},
    auth,
    signIn,
    signOut
} =
NextAuth({
    adapter: MongoDBAdapter(clientPromise, {
        databaseName: process.env.ENVIRONMENT
    }),
    providers: [
        CredentialsProvider({
            credentials: {
                email: {},
                password: {},
            },

            async authorize(credentials){
                if(credentials == null){
                    return null;
                }

                try {
                    const user = await userModel.findOne({email: credentials.email});
                    if(user){
                        try {
                            const isMatch = user.email === credentials.email;
                            if(isMatch){
                                return user;
                            } else {
                                throw new Error("Credentials Dose not match!");
                            }
                        } catch (error) {
                            
                        }
                    } else {
                        throw new Error("User not found!");
                    }
                } catch (error) {
                    throw new Error(error)
                }
            }

        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ]
})