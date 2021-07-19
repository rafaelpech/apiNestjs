import { IsInt, IsString, IsEmail } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateContactDto {

    @IsString()
    nombre: string;

    @IsString()
    apellido: string;
    
    @IsString()
    telefono: string;
    
    @IsEmail()
    correo:string;
    
    @IsInt()
    edad: number;
    
    @IsInt()
    activo?: number;
}