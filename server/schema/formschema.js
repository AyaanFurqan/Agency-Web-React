import mongoose from 'mongoose'

const formschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    message:{
        type:String,
        required:true
    }
})

const formmodel = mongoose.model('forms',formschema)

export default formmodel