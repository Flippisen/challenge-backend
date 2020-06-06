import { Challenge } from '../../models/challenge/challenge.model';

export interface ChallengeRepository {
    getById(id: string): Promise<Challenge>;
    getAll(): Promise<Challenge[]>;
    addOne(challenge: Challenge): Promise<Challenge>;
}
