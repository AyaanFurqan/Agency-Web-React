import express from 'express'
import connectDB from './config/config.js'
import formrouter from './routes/formroute.js'
import cors from 'cors'

const app = express()
const port = '3000'

app.use(express.json())
app.use(cors({
    origin:'http://localhost:5173'
}))


app.use('/api',formrouter)

connectDB().then(()=>{
    console.log('database connected successfully')
    app.listen(port,()=>{
    console.log(`server is running on port ${port} `)
})
}).catch((err)=>{
    console.log('database connection error', err)
})





