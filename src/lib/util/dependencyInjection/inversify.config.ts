import { Container } from 'inversify';
import { ConnectionProvider } from '../interface/connectionProvider';
import { DependencyInjection } from './dependencyInjection';
import { DatabaseConnectionProvider } from '../databaseConnectionProvider';
import { ChallengeRepository } from '../../repositories/interfaces/challengeRepository';
import { MongoChallengeRepository } from '../../repositories/mongoChallengeRepository';

const injector = new Container();
injector.bind<ChallengeRepository>(DependencyInjection.ChallengeRepository).to(MongoChallengeRepository);
injector.bind<ConnectionProvider>(
    DependencyInjection.ConnectionProvider).to(DatabaseConnectionProvider);

export { injector };
