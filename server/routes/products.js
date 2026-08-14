import { Router } from "express";
import { getAllProducts } from "../db.js"


const router = Router()

router.get('/', async (req, res)=>{
    const products = await getAllProducts()
    res.json(products)
})


export default router