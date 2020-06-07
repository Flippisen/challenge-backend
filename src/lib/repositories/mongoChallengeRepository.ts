import { Challenge } from '../models/challenge/challenge.model';
import { DatabaseConnectionProvider } from '../util/databaseConnectionProvider';
import { Db } from '../util/interface/db';
import { ChallengeRepository } from './interfaces/challengeRepository';

export class MongoChallengeRepository implements ChallengeRepository {
    db: Promise<Db>;

    constructor() {
      this.db = new DatabaseConnectionProvider().init();
    }

    public async getById(id: string): Promise<Challenge> {
      const db = await this.db;
      return db.ChallengeModel.findById(id).exec();
    }

    public async getAll(): Promise<Challenge[]> {
      const db = await this.db;
      return db.ChallengeModel.find();
    }

    public async addOne(challenge: Challenge): Promise<Challenge> {
      const db = await this.db;
      return db.ChallengeModel.create(challenge);
    }
}
