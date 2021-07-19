import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from '../entities/contact.entity';
import { RecycleContactController } from './recycle-contact.controller';
import { RecycleContactService } from './recycle-contact.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Contact]),
  ],
  controllers: [RecycleContactController],
  providers: [RecycleContactService]
})
export class RecycleContactModule {}
