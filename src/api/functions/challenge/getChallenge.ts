import { Controller } from '../../../lib/util/controller';
import { Challenge } from '../../../lib/models/challenge/challenge.model';
import { Request } from 'express';
import { GetChallengePathParams } from './interfaces/getChallengeRequest';
import { inject } from 'inversify';
import { DependencyInjection } from '../../../lib/util/dependencyInjection/dependencyInjection';
import { ChallengeLogic } from '../../../lib/logic/challengeLogic';
import { injector } from '../../../lib/util/dependencyInjection/inversify.config';
import { ResponseFormat } from '../../../lib/interfaces/responseFormat';
import { StatusCodes } from '../../../lib/enums/statusCodes';

export class GetChallenge extends Controller<Challenge> {
  constructor(
    @inject(DependencyInjection.ChallengeLogic)
    private challengeLogic: ChallengeLogic =
    injector.get<ChallengeLogic>(DependencyInjection.ChallengeLogic),
  ) {
    super();
  }

  // ignore ts error as express gives us no way to extend ParamsDictionary
  // @ts-ignore
  public async handler(request: Request<GetChallengePathParams, undefined, undefined, undefined>): Promise<ResponseFormat<Challenge>> {
    const challengeId = request.params.id;
    const challenge = await this.challengeLogic.getById(challengeId);
    return {
      statusCode: StatusCodes.Success,
      data: challenge,
    };
  }
}
