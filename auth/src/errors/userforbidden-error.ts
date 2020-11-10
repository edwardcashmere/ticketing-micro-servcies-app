import { CustomError }  from './custom-errors';


export class UserForbiddenError extends  CustomError {
    statusCode =401
    constructor(){
        super('Not Authorized')


        Object.setPrototypeOf(this, UserForbiddenError.prototype)

    }

    serializeErrors(){
        return [{message:'Not Authorized'}]
    }
}