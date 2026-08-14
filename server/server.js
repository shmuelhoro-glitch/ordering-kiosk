import "dotenv/config"
import productsRouter from "./routes/products.js"
import ordersRouter from "./routes/orders.js"
import express from "express"




const app = express()

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use('/api/orders', ordersRouter)

app.use('/api/products', productsRouter)



app.listen(3000, ()=>{
    console.log('server listening on port 3000')
})