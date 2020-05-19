import { prop } from '@typegoose/typegoose';
import { DbItem } from '../dbItem';

export class Challenge extends DbItem {
    @prop()
    public description: string;
    @prop()
    public completed: boolean;
    @prop()
    public target: number;
    @prop()
    // Maps userId to score
    public scores: Map<string, number>;
}
