import { User } from '../../models/user/user.model';

export interface UserRepository {
    addOne(user: User): User;
    getById(id: string): User;
    getAll(): User[];
}
