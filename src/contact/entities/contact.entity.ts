import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';

@Entity('contacts')
export class Contact {

    @PrimaryGeneratedColumn()
    id?: number; 

    @Column({type:'varchar', length: 255 })
    nombre: string;
    
    @Column({type:'varchar', length: 255 })
    apellido: string;
    
    @Column({type:'varchar', length: 255 })
    telefono: string;
    
    @Column({type:'varchar', length: 255, unique: true })
    correo:string;
    
    @Column({type:'int'})
    edad: number;
    
    @Column({type:'int', default: 1 })
    activo?: number;
}