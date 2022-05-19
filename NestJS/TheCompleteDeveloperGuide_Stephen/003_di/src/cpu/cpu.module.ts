import {Module} from '@nestjs/common';
import {CpuService} from '../cpu/cpu.service';

@Module({
    providers: [CpuService]
})
export class CpuModule {
}