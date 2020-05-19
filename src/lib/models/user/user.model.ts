import { prop } from '@typegoose/typegoose';
import { DbItem } from '../dbItem';

export class User extends DbItem {
    @prop({ unique: true })
    public id!: string;
    @prop()
    name: string;
    @prop({ items: String })
    friendIds: string[];
}
