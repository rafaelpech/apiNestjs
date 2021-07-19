import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateContactDto } from '../dtos'; 
import { Contact } from '../entities/contact.entity';

@Injectable()
export class RecycleContactService {

    constructor(
        @InjectRepository(Contact)
        private readonly recycleContactRepository: Repository<Contact>
    ){}

    async getAllOff(): Promise<Contact[]>{
      
        return await this.recycleContactRepository.find({ where: { activo: 0}})
   }

    async getOneOff(id: number){
        const contact = await this.recycleContactRepository.findOne(id, { where: { activo: 0}});
        if (!contact) throw new NotFoundException('El contacto no existe o se ha eliminado permanentemente');
        return contact
    }

    async deleteOneOff(id: number){
        return await this.recycleContactRepository.delete(id);
    }

    async updateRestore(id: number){
        const contact = await this.recycleContactRepository.findOne(id);
        if (!contact) throw new NotFoundException('El contacto no existe o se ha eliminado permanentemente');
        contact.activo = 1;
        return await this.recycleContactRepository.save(contact);
    }
}
