import { Request,Response ,NextFunction} from 'express'
import { UserForbiddenError }  from '../errors/userforbidden-error'

export const requireAuth =(
    req:Request,
    res:Response,
    next:NextFunction
)=>{
    if(!req.currentUser){
        throw new UserForbiddenError()
    }

    next()

}