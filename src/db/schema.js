import mongoose from 'mongoose'
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
   },
   email:{
    type:String,
    unique:true
   },
   photo:{
    type:String,
    required:true
   },  
   phone:{
    type:String,
    default:""
   },
   address:{
    type:String,
    default:""
   },
   admin:{
    type:Number,
    default:0
   }
},{timestamps:true})



const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    products:[
        {
            category:{
                type : String,
                required:true
            },
            product:[
                {
                    name:{
                        type :String,
                        required:true
                    },
                    price:{
                        type :Number,
                        required:true
                    },
                    discount:{
                        type:Number,
                        required:true
                    },
                    photo:{
                        data:Buffer,
                    contentType:String
                }
                 }
            ]
        }
    ]
})


const photoSchema = new mongoose.Schema({
    photo:{
        data:Buffer,
        contentType:String
    }
})
const User =mongoose.models.user || mongoose.model('user',userSchema);
const Phot = mongoose.models.photo || mongoose.model('photo',photoSchema);
const Product = mongoose.models.products || mongoose.model('products',productSchema)
export  {User,Phot,Product}