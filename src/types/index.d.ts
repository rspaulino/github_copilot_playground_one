export interface CustomRequest extends Express.Request {
    // Add custom properties for the request object here
}

export interface CustomResponse extends Express.Response {
    // Add custom properties for the response object here
}

export interface CustomNextFunction {
    (err?: any): void;
}