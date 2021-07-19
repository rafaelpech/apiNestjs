import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto, UpdateContactDto } from './dtos';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Contact')
@Controller('api/contact')
export class ContactController {

    constructor(private readonly contactService: ContactService){}

    @Get()
    async getAll(){
         
        const data = await this.contactService.getAll();
        return { data };
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number){

        return await this.contactService.getOne(id);
    }

    @Post()
    async create(@Body() contactosDto: CreateContactDto){
        const data = await this.contactService.create(contactosDto);
        return {
            message: 'Post Ok',
            data
        }
    }

    @Patch(':id')
    async update( @Param('id', ParseIntPipe) id: number, @Body() contactosDto: UpdateContactDto ){

        const data = await this.contactService.update(id, contactosDto);
        return {
            message: 'update Ok',
            data
        }
    }

    @Patch('delete/:id')
    async updateDelete( @Param('id', ParseIntPipe) id: number ){
        
        const data = await this.contactService.updateDelete(id);        
        return {
            message: 'delete temporal Ok',
            data
        }
    }


}
