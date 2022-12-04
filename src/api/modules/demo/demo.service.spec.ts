import { Test } from '@nestjs/testing';
import { DemoService } from './demo.service';

const token = 'token_secret';

describe('getDemos', () => {
  let demoService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [DemoService],
    }).compile();

    demoService = module.get<DemoService>(DemoService);
  });

  describe('getDemos', () => {
    it('Call demo', async () => {
      const result = await demoService.getDemo(token);
      expect(result).toEqual(token);
    });
  });
});
