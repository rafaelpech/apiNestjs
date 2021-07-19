import { Module } from '@nestjs/common';
import { configDB } from 'orm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configDB),
    ContactModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
