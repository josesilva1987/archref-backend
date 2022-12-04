import { Controller, Get, UseGuards } from '@nestjs/common';
import { getConfigToken } from '@nestjs/config';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { GetToken } from 'src/api/decorators/get.token.decorator';
import { AuthTokenGuard } from 'src/api/guards/auth-token.guard';
import { DemoService } from './demo.service';

@ApiTags('demo')
@ApiBearerAuth('authorization')
@UseGuards(AuthTokenGuard)
@Controller('demo')
export class DemoController {
  constructor(private demoService: DemoService) {}

  @Get()
  @ApiOperation({ summary: 'Get Demo' })
  @ApiResponse({ status: 200, isArray: true })
  getDemo(@GetToken() authToken: string): Promise<string> {
    return this.demoService.getDemo(authToken);
  }
}
