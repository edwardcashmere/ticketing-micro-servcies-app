import { ObjectFlags } from "typescript"

import { CustomError } from './custom-errors'
export class BadRequestError extends CustomError{
    statusCode=401
    constructor(public message:string){
        super(message)

        Object.setPrototypeOf(this, BadRequestError.prototype)
    }
    serializeErrors(){
        return [{message:this.message}]
    }

} 