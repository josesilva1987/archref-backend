import { Controller, Get } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import {
  HealthCheck,
  HealthCheckService,
  MicroserviceHealthIndicator,
} from '@nestjs/terminus';
import { HttpExceptionDto } from 'src/api/filters/http-exception.dto';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private microservice: MicroserviceHealthIndicator,
  ) {}

  @Get()
  @Get()
  @ApiOperation({ summary: 'Validate BFF status' })
  @ApiResponse({ status: 200, description: 'Endpoint executed with sucess' })
  @ApiResponse({
    status: 400,
    description: 'Invalid executed Endpoint',
    type: HttpExceptionDto,
  })
  @HealthCheck()
  check() {
    return this.health.check([
      () =>
        this.microservice.pingCheck('tcp', {
          transport: Transport.TCP,
          options: { host: 'localhost', port: process.env.PORT },
        }),
    ]);
  }
}
