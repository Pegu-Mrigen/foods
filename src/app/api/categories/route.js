import { Category } from "@/app/models/Category"
import mongoose from "mongoose";

export async function POST(req){
    mongoose.connect(process.env.MONGO_URL);
    const {name}= await req.json()
try{

    const categoryDoc= await Category.create({name})
    return Response.json(categoryDoc) 
}catch(err){
    console.log(err)
    return Response.json(err) 
}

}
export async function PUT(req){
    mongoose.connect(process.env.MONGO_URL);
    const {_id, name}= await req.json()

    await Category.updateOne({_id},{name})
    return Response.json(true)
}


export async function GET(){
    mongoose.connect(process.env.MONGO_URL);
    
    return Response.json(await Category.find())
}
export async function DELETE(req){
    mongoose.connect(process.env.MONGO_URL);
    console.log(req.url)

    const url= new URL(req.url)
    console.log(url.searchParams)

    const _id=url.searchParams.get("_id")
    const res=await Category.deleteOne({_id})
    return Response.json(res)
    // await Category.deleteOne({_id})
    // return Response.json(true)
}