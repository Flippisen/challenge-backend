import { Container } from 'inversify';
import { ConnectionProvider } from '../interface/connectionProvider';
import { DependencyInjection } from './dependencyInjection';
import { DatabaseConnectionProvider } from '../databaseConnectionProvider';
import { ChallengeRepository } from '../../repositories/interfaces/challengeRepository';
import { MongoChallengeRepository } from '../../repositories/mongoChallengeRepository';
import { ChallengeLogic } from '../../logic/challengeLogic';

const injector = new Container();
injector.bind<ChallengeLogic>(DependencyInjection.ChallengeLogic).to(ChallengeLogic);
injector.bind<ChallengeRepository>(DependencyInjection.ChallengeRepository).to(MongoChallengeRepository);
injector.bind<ConnectionProvider>(
    DependencyInjection.ConnectionProvider).to(DatabaseConnectionProvider);

export { injector };
