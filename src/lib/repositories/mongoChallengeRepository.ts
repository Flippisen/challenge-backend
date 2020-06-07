import { Challenge } from '../models/challenge/challenge.model';
import { Db } from '../util/interface/db';
import { ChallengeRepository } from './interfaces/challengeRepository';
import { DependencyInjection } from '../util/dependencyInjection/dependencyInjection';
import { ConnectionProvider } from '../util/interface/connectionProvider';
import { injector } from '../util/dependencyInjection/inversify.config';
import { inject } from 'inversify';

export class MongoChallengeRepository implements ChallengeRepository {
    db: Promise<Db>;

    constructor(
        @inject(DependencyInjection.ConnectionProvider)
        connectionProvider: ConnectionProvider =
        injector.get<ConnectionProvider>(DependencyInjection.ConnectionProvider),
    ) {
      this.db = connectionProvider.init();
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
