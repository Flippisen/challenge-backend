import { getModelForClass, ReturnModelType } from '@typegoose/typegoose';
import { Challenge } from '../../models/challenge/challenge.model';
import { Media } from '../../models/media/media.model';
import { User } from '../../models/user/user.model';
import { ModelType } from '@typegoose/typegoose/lib/types';

export interface Db {
    ChallengeModel: ModelType<Challenge>;
    MediaModel: ReturnModelType<typeof Media>;
    UserModel: ReturnModelType<typeof User>;
}
