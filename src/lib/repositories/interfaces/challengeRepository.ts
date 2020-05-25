import { Challenge } from '../../models/challenge/challenge.model';

export interface ChallengeRepository {
    getById(id: string): Challenge;
    getAll(): Challenge[];
    addOne(challenge: Challenge): Challenge;
}
