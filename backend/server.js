const express=require("express")
const app=express()
const mongoose=require("mongoose")
const cors=require("cors")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")



mongoose.connect("mongodb://127.0.0.1:27017/e-comm")
.then(()=>{
    console.log("connected to the database")
}).catch(()=>{
    console.log("cannot connect to the database")
})


app.use(cors()); 
app.use(express.json())

const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    password:String
})


const User=  mongoose.model("users",userSchema,"users")


app.post("/register",async(req,res)=>{
const{name,email,password}=req.body

if(!name || !email || !password){
    return res.status(400).json({message:"All fields are required"})
}

const existinguser=await User.findOne({email})
if(existinguser){
    return res.json("user already exists")
}
const hashedpassword=await bcrypt.hash(password,10)
let data= new User({name,email,password:hashedpassword})

await data.save()
res.json("user registered successfully")

})


app.post("/login",async(req,res)=>{
const {email,password}=req.body
let user=await User.findOne({email})

if(!user){
    return res.json("user doest not exist")}

    let ispasswordvalid=await bcrypt.compare(password,user.password)
    if(!ispasswordvalid){
        return res.json("invalid credentials")
    }


 const token= jwt.sign({userId:user._id},"secretkey")
 res.json(token)

})

const productSchema = new mongoose.Schema({
    id:Number,
    img: String,
    title: String,
    price: Number,
    category: String,
  });
  
  const Product = mongoose.model("products", productSchema, "products");
  app.get("/products", async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (err) {
      res.status(500).json({ message: "Server error" });
    }
  });  




app.listen(7000,()=>{
    console.log("server started")
})






// bcryp campare and jwt



// app.post("/user",async (req,res)=>{
//     const user=new User({
//         name:req.body.name,
//         email:req.body.email,
//         password:req.body.password
//     })
//     try{
//           let result= await data.save(user)
//           console.log(result)
//     }catch(err){
//         console.log(err)
        
//     }
// })