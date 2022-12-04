import { Injectable } from '@nestjs/common';

@Injectable()
export class DemoService {
  async getDemo(authToken: string): Promise<string> {
    return authToken;
  }
}
