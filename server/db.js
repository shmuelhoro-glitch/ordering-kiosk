import "dotenv/config"
import { MongoClient } from "mongodb";


const client = new MongoClient(process.env.MONGO_URI);


async function getColl(coll){
    await client.connect()
    const db = client.db('ordering-kiosk')
    return db.collection(coll)
}


export async function getAllProducts(){
    const coll = await getColl('products')
    const result = coll.find().toArray()
    return result
}


export async function getProductById(p_id){
    const coll = await getColl('products')
    const result = await coll.findOne({id: p_id})
    return result
}





export async function getAllOrders(){
    const coll = await getColl('orders')
    const result = await coll.find().toArray()
    return result
}


export async function insertOrder(newOrder){
    const coll = await getColl('orders')
    const result = await coll.insertOne(newOrder)
    return result.insertedId
}




