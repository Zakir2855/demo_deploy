import { NextResponse } from "next/server";

export function Get(req,resp){
    return NextResponse.json({"message":"success"})
}