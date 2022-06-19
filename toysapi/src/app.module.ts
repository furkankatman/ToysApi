import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ToysModule } from './toys/toys.module';
console.log("./environments/" + process.env.NODE_ENV.trim() + ".env")
//    "start:dev": "set NODE_ENV=development&  nest start --watch", # Combined set NODE_ENV=development iwth start command to have env in process.env.node_env :) and if you dont use &at the end without any space it works well if a space between development and & it puts a space that you have to trim. 

@Module({
  imports: [ToysModule, ConfigModule.forRoot({ envFilePath: ["./environments/" + process.env.NODE_ENV + ".env"] })],
  controllers: [],
  providers: [],
})
export class AppModule { }
