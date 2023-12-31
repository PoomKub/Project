import { Module } from '@nestjs/common';
import { GenService } from './gen.service';
import { GenController } from './gen.controller';

@Module({
  controllers: [GenController],
  providers: [GenService]
})
export class GenModule {}
