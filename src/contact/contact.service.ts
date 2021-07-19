import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateContactDto, UpdateContactDto } from './dtos';
import { Contact } from './entities/contact.entity';

@Injectable()
export class ContactService {

    constructor(
        @InjectRepository(Contact)
        private readonly contactRepository: Repository<Contact>
    ){}

    async getAll(): Promise<Contact[]>{
      
         return await this.contactRepository.find({ where: { activo: 1}})
    }
    
    async getOne(id: number){
        const contact = await this.contactRepository.findOne(id, { where: { activo: 1}});
        if (!contact) throw new NotFoundException('El contacto no existe o se ha eliminado temporalmente, consulte la papelera');
        return contact
    }
    
    async create(contactosDto: CreateContactDto){
        const contact =  this.contactRepository.create(contactosDto);
        return await this.contactRepository.save(contact);
    }
    async update(id: number, contactosDto: UpdateContactDto){
        const contact = await this.contactRepository.findOne(id);
        if (!contact) throw new NotFoundException('El contacto no existe o se ha eliminado temporalmente, consulte la papelera');

        const updateContact = Object.assign(contact, contactosDto);
        return await this.contactRepository.save(updateContact);
    }

    async updateDelete(id: number){

        const contact = await this.contactRepository.findOne(id);
        if (!contact) throw new NotFoundException('El contacto no existe o se ha eliminado temporalmente, consulte la papelera');
        contact.activo = 0;
        return await this.contactRepository.save(contact);
    }

}
