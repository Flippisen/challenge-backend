import { prop } from '@typegoose/typegoose';

export class DbItem {
    public id: string;
    @prop()
    public createdAt?: number;
    @prop()
    public updatedAt?: number;
}
