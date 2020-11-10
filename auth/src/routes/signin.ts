import express,{Request,Response} from 'express';
import {body,validationResult} from 'express-validator';
import { Password } from '../services/password'
import { validateRequest} from '../middlewares/validate-requests'
import {User } from '../models/user'
import { BadRequestError} from '../errors/bad-request-error'
import jwt from 'jsonwebtoken'


const router= express.Router()

router.post('/api/users/signin',[
    body('email')
        .isEmail()
        .withMessage('Email must be valid'),
    body('password')
        .trim()
        .notEmpty()
        .withMessage('You must supply as password')
],validateRequest,async(req:Request,res:Response)=>{
    const {email,password}=req.body

const user= await User.findOne({email});
if(!user){
    throw new BadRequestError('Invalid credentials')
}

const passwordMatch= await Password.compare(user.password,password)
if(!passwordMatch){
    throw new BadRequestError('Invalid credentials')
}
const userJwt= jwt.sign({id:user.id,email:user.email},process.env.JWT_KEY!)


    //store it on session object
    req.session={
        jwt: userJwt
    }
    res.status(200).send(user)

  //  res.send('Hi there')
})

export { router as  signinRouter}