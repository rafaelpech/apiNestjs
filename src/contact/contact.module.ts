import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';
import { Contact } from './entities/contact.entity';
import { RecycleContactModule } from './recycle/recycle-contact.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Contact]),
    RecycleContactModule
  ],
  controllers: [ContactController],
  providers: [ContactService]
})
export class ContactModule {}
