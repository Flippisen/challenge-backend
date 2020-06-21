import { StatusCodes } from '../enums/statusCodes';

export interface ResponseFormat<T> {
    statusCode: StatusCodes,
    data: T;
}
