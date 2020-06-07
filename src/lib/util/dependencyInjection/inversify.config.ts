import { Container } from 'inversify';
import { ConnectionProvider } from '../interface/connectionProvider';
import { DependencyInjection } from './dependencyInjection';
import { DatabaseConnectionProvider } from '../databaseConnectionProvider';

const injector = new Container();
injector.bind<ConnectionProvider>(
    DependencyInjection.ConnectionProvider).to(DatabaseConnectionProvider);

export { injector };
