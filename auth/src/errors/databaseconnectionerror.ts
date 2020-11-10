import { CustomError } from './custom-errors'
export class DatabaseConnectionError extends CustomError{
    statusCode = 500;
    reason='There is an issue connecting to the database';
    constructor(){
        super('error conncting to database')

        //because we extend the inbuilt error class
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype)

    }
    serializeErrors(){
        return [
            {message:this.reason}
        ]
    };
}