import { prop } from '@typegoose/typegoose';

export class DbItem {
    @prop({ index: true })
    public id?: string;
    @prop()
    public createdAt?: number;
    @prop()
    public updatedAt?: number;
}
