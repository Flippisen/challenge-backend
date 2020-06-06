import { Db } from './db';

export interface ConnectionProvider {
    init(): Promise<Db>;
}
