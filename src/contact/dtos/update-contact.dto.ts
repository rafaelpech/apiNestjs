import { CreateContactDto } from "./create-contact.dto";
import { PartialType, OmitType } from "@nestjs/mapped-types"
import { ApiProperty } from '@nestjs/swagger';

// extends para volver opcional los datos de create
// export class UpdateContactDto extends PartialType (CreateContactDto) {

// }

// extends para volver opcional los datos de create e ignorar campos
export class UpdateContactDto extends PartialType(
    OmitType(CreateContactDto, ['correo'] as const)
){}