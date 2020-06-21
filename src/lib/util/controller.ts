import { ResponseFormat } from '../interfaces/responseFormat';

import { Request } from 'express';

export abstract class Controller<T> {
    abstract handler(event: Request): Promise<ResponseFormat<T>>;
}
