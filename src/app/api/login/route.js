import { NextResponse } from "next/server";
import { db } from "@/db/db";
import { User } from "@/db/schema";

export async function POST(request,content) {
    try {
        let {name,email,photo} = await request.json();
    db();
    let user = await User.findOne({email})
    if (!user) {
        let newUser = await new User({
            name,
            email,
            photo, 
        })
        await newUser.save();
        
        return NextResponse.json({response:'profile'})
    }
    return NextResponse.json({responce:user});
    } catch (error) {
        console.log(error);
        return NextResponse.json({err:error})
    }
}  