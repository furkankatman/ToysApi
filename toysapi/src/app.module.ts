import { Module } from '@nestjs/common';
import { ToysModule } from './toys/toys.module';

@Module({
  imports: [ToysModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
