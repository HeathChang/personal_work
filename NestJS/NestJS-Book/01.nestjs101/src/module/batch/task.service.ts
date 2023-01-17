import {Injectable, Logger} from "@nestjs/common";
import {Cron, Interval, SchedulerRegistry, Timeout} from "@nestjs/schedule";
import {CronJob} from "cron";

// @ts-ignore
// @ts-ignore
@Injectable()
export class TaskService{
    private readonly logger = new Logger(TaskService.name);
    constructor( private  readonly schedulerRegistry: SchedulerRegistry) { // 주입하기
        this.addCronJob(); // taskService 가 생성될 떄, 크론잡 하나를 schedulerRegistry에 추가함. (추가만 하는것이지, 태스크 스케쥴링 등록하는 것은 아님)
    }
    addCronJob(){
        const name = 'cronSample';
        const job = new CronJob('******', ()=> {
            this.logger.warn(`run ${name}`)
        })
        this.schedulerRegistry.addCronJob(name,job)
        this.logger.warn(`job ${name} added`)

    }
    // // Task Scheduling 선언하는 방법 1 : 크론잡 선언 방식
    // // @cron의 첫번째 인수: 태스크의 반복 주기로 표준 크론 패턴을 따름  (* 6개: 매초마다)
    // @Cron('******', {name: 'cronTask'})
    // handleCron(){
    //     this.logger.debug('Called every second');
    //     // this.logger.log('Task Called:::::::::::::::::')
    // }
    //
    // // Task Scheduling 선언하는 방법 2 : 인터벌 선언
    // // 첫번째 인수: 태스크 이름, 두번째 인수:: 타임아웃 시간
    // @Interval('intervalTask', 3000)
    // handleInterval(){
    //     this.logger.debug('Task Called by Interval:::::::::::::::::')
    // }
    //
    // // Task Scheduling 선언하는 방법 3 : 타임아웃 선언
    // // 한번만 실행
    // @Timeout('timeoutTask', 5000)
    // handleTimeout(){
    //     this.logger.log('Task Called by Timeout:::::::::::::::::')
    // }
}