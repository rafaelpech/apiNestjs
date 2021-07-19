import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const configDB: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Rafaelpech.24',
    database: 'prueba',
    synchronize: true,
    entities: ["dist/**/*.entity{.ts,.js}"]
}
