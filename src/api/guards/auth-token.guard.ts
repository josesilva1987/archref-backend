import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthTokenGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    let token = '';

    if (
      request.headers.authorization &&
      request.headers.authorization.startsWith('Bearer')
    ) {
      token = request.headers.authorization.split(' ')[1];
      request.token = token;
    }

    if (!token) {
      throw new UnauthorizedException('Auth token should be provided');
    }

    return true;
  }
}
