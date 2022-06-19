import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ToysController } from './toys.controller';
import { ToysService } from './toys.service';

@Module({
  imports: [ConfigModule],
  providers: [ToysService],
  controllers: [ToysController]
})
export class ToysModule {



}
