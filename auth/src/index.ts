import mongoose from 'mongoose';
const port = 3000 || process.env.PORT
import { app } from './app'


const start =async()=>{
    try {
        if(!process.env.JWT_KEY){
            throw new Error('JWT must be defined')
        }
        await mongoose.connect('mongodb://auth-mongo-srv:27017/auth',{
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology:true
        })
        console.log('connected to mongodb')
    } catch (error) {
        console.log(error)
    }
    app.listen(port,()=>{
        console.log(`Auth server running on port ${port}!!!`)
    })
   
    }

start()

