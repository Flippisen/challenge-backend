import { ConnectionProvider } from './interface/connectionProvider';
import { Db } from './interface/db';
import { mongoose, getModelForClass } from '@typegoose/typegoose';
import { Challenge } from '../models/challenge/challenge.model';
import { User } from '../models/user/user.model';
import { Media } from '../models/media/media.model';

export class DatabaseConnectionProvider implements ConnectionProvider {
  public async init(): Promise<Db> {
    await mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'challenge-app' });

    const db: Db = {
      ChallengeModel: getModelForClass(Challenge),
      MediaModel: getModelForClass(Media),
      UserModel: getModelForClass(User),
    };

    return db;
  }
}
