import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { ApiModule } from './api/api.module';
import { WinstonModule } from 'nest-winston';
import { HealthController } from './health/health.controller';
import { TerminusModule } from '@nestjs/terminus';
import { ServiceModule } from './services/services.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    WinstonModule.forRoot({}),
    TerminusModule,
    ServiceModule,
    ApiModule,
  ],
  controllers: [AppController, HealthController],
  providers: [],
})
export class AppModule {}
