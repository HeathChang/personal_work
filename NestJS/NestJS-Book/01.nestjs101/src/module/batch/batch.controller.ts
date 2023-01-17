import {Controller, Post} from "@nestjs/common";
import {SchedulerRegistry} from "@nestjs/schedule";

@Controller('batches')
export class BatchController {
    constructor( private scheduler: SchedulerRegistry) { // Controller에도 SchedulerRegistry 주입
    }

    @Post('/start-sample')
    start(){
        const job = this.scheduler.getCronJob('cronSample') // SchedulerRegistry에 등록된 크론잡을 가져옴. 등록할 때는 선언한 이름을 사용
        job.start() // 크롭잡 실행
        console.log('start!!', job.lastDate())
    }

    @Post('/stop-sample')
    stop(){
        const job = this.scheduler.getCronJob('cronSample')
        job.stop(); // 크롭잡 중지
        console.log('stopped::::: ', job.lastDate())
    }

}