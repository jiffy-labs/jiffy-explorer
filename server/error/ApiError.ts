class ApiError {
    code: number
    message: string

    constructor(code: number, message: string) {
        this.code = code
        this.message = message
    }

    static badRequest(msg: string) {
        return new ApiError(400, msg)
    }

    static internalServerError(msg: string) {
        return new ApiError(500, msg)
    }
}

export default ApiError