import {NestFactory} from '@nestjs/core';
import {ComputerModule} from './computer/computer.module';

async function bootstrap() {
    console.log()
    console.log()
    console.log()
    const app = await NestFactory.create(ComputerModule);
    await app.listen(3000);
}

bootstrap();
