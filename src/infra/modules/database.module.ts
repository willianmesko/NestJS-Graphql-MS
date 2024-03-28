import { Module } from '@nestjs/common';
import { databaseProviders } from '../data/client/mongoose/mongoose.service';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
