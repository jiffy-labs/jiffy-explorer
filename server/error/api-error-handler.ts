import { Request, Response, NextFunction } from "express"
import ApiError from "./ApiError"

function apiErrorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    // in prod dont use console.error or log 
    // it is not async 
    console.error(err);

    if (err instanceof ApiError) {
        res.status(err.code).json({message: err.message})
        return
    }

    res.status(500).json('Something went wrong')
}

export default apiErrorHandler