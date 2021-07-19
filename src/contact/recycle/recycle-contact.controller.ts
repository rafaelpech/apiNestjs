import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { RecycleContactService } from './recycle-contact.service';
import { UpdateContactDto } from '../dtos';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Recycle to Contact')
@Controller('api/recycleContact')
export class RecycleContactController {
    constructor(private readonly recycleContactService : RecycleContactService){}

    @Get()
    async getAllOff(){
         
        const data = await this.recycleContactService.getAllOff();
        return { data };
    }

    @Get(':id')
    async getOneOff(@Param('id', ParseIntPipe) id: number){
        return this.recycleContactService.getOneOff(id);
    }

    @Patch(':id')
    async updateRestore( @Param('id', ParseIntPipe) id: number, @Body() contactosDto: UpdateContactDto ){
        return this.recycleContactService.updateRestore(id);
    }

    @Delete(':id')
    async deleteOneOff(@Param('id', ParseIntPipe) id: number){
        const data = await this.recycleContactService.deleteOneOff(id);
        return { message: 'delete permanente Ok', data };
    }
}
