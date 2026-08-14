import { Router } from "express";
import { getAllOrders, insertOrder } from "../db.js";


const router = Router()

router.get('/', async (req, res)=>{
    const orders = await getAllOrders()
    res.json(orders)
})

router.post('/', async (req, res)=>{
    const {items, totalPrice} = req.body
    if (items.length == 0 || !totalPrice == 0){
        return res.status(400).json({success:false, message:"The cart is empty."})
    }
    const newOrder = {
        items,
        totalPrice,
        createdAt: new Date().toISOString()
    }
    const result = await insertOrder(newOrder)
    res.status(201).json({success:true, message:"The order was added successfully."})
})

export default router