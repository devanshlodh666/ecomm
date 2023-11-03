import { NextResponse } from "next/server";
import { db } from "@/db/db";
import { User } from "@/db/schema";
db()
export async function GET(req,content) {
    let email = content.params.email;
    console.log(email,
        'iujiu');
    db();
    let user = await User.findOne({email});
    return NextResponse.json({a:user})
}