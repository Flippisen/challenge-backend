import { DbItem } from '../dbItem';
import { prop } from '@typegoose/typegoose';

export class Media extends DbItem {
    @prop()
    public fileType: string;
    @prop()
    public userId: string;
    @prop()
    public challengeId: string;
}
