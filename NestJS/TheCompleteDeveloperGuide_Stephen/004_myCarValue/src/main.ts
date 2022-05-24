import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {ValidationPipe} from '@nestjs/common'

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true, // incoming requests should not have extra properties (params) - not show in terminal

        })
    )
    await app.listen(3000);
}

bootstrap();
