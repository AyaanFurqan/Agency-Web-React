import formmodel from "../schema/formschema.js"

const formadd =async (req,res)=>{
 const {name,email,message} = req.body
 if(!name || !email || !message){
   return res.json('please fill out form')
 }
try {
    const newform = new formmodel({name,email,message})
    await newform.save()
    res.json({status:200,message:'form submitted successfully'})
} catch (error) {
    return res.json({ message: error.message })
}
}

export default formadd;