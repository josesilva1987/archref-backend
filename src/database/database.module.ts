import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mongodb', /// Banco
      host: '',
      port: 1,
      username: '',
      password: '',
      database: '',
      entities: [],
      migrations: [],
      synchronize: false,
    }),
  ],
})
export class DatabaseModule {}
