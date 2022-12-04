import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetToken = createParamDecorator(
  (_data, ctx: ExecutionContext): string => {
    const req = ctx.switchToHttp().getRequest();
    return req.token;
  },
);
