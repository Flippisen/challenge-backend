import { ConnectionProvider } from './interface/connectionProvider';
import { Db } from './interface/db';
import { mongoose, getModelForClass } from '@typegoose/typegoose';
import { Challenge } from '../models/challenge/challenge.model';
import { User } from '../models/user/user.model';
import { Media } from '../models/media/media.model';
import { SchemaOptions } from 'mongoose';

export class DatabaseConnectionProvider implements ConnectionProvider {
  public async init(): Promise<Db> {
    await mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'challenge-app' });

    const defaultSchemaOptions: SchemaOptions = {
      timestamps: true,
    };

    const db: Db = {
      ChallengeModel: getModelForClass(
          Challenge,
          { schemaOptions: defaultSchemaOptions },
      ),
      MediaModel: getModelForClass(
          Media,
          { schemaOptions: defaultSchemaOptions },
      ),
      UserModel: getModelForClass(
          User,
          { schemaOptions: defaultSchemaOptions },
      ),
    };

    return db;
  }
}
