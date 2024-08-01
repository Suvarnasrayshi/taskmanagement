import { Module } from '@nestjs/common';
import { TypeoftaskController } from './typeoftask.controller';
import { TypeoftaskService } from './typeoftask.service';

@Module({
  controllers: [TypeoftaskController],
  providers: [TypeoftaskService]
})
export class TypeoftaskModule {}
