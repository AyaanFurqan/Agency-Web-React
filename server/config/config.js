import mongoose from "mongoose";
import 'dotenv/config'

const connectDB = async ()=>{
await mongoose.connect(`${process.env.MONGODB_URI}`)

mongoose.connection.on('connected',()=>{

    console.log('database connected successfully')

})
}

export default connectDB