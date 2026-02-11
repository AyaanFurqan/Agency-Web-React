import express from'express'
import formadd from '../controller/formcontroller.js'

const formrouter = express.Router()

formrouter.post('/addform',formadd)

export default formrouter
