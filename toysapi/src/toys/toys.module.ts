import { Module } from '@nestjs/common';
import { ToysController } from './toys.controller';
import { ToysService } from './toys.service';

@Module({
  providers: [ToysService],
  controllers: [ToysController]
})
export class ToysModule {



}
