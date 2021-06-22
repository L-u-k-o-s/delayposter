import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {UsersModule} from './users/users.module';
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
    imports: [
        ConfigModule.forRoot(),
        UsersModule,
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5433,
            username: 'postgres',
            password: 'root',
            database: 'postgres',
            entities: ["dist/**/*.entity{.ts,.js}"],
            synchronize: true,
            autoLoadEntities: true,
        }),],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
