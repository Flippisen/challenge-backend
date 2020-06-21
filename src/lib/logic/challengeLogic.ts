import { inject, injectable } from 'inversify';
import { DependencyInjection } from '../util/dependencyInjection/dependencyInjection';
import { ChallengeRepository } from '../repositories/interfaces/challengeRepository';
import { injector } from '../util/dependencyInjection/inversify.config';
import { Challenge } from '../models/challenge/challenge.model';

@injectable()
export class ChallengeLogic {
  constructor(
    @inject(DependencyInjection.ChallengeRepository)
    private challengeRepository: ChallengeRepository =
    injector.get<ChallengeRepository>(DependencyInjection.ChallengeRepository),
  ) { }

  public async getById(id: string): Promise<Challenge> {
    return this.challengeRepository.getById(id);
  }

  public async getAll(): Promise<Challenge[]> {
    return this.challengeRepository.getAll();
  }

  public async add(challenge: Challenge): Promise<Challenge> {
    return this.challengeRepository.addOne(challenge);
  }
}
