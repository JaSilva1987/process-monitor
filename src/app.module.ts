import { Module } from "@nestjs/common";
import { ProcessController } from "./process-monitor/process-monitor.controller";
import { ProcessMonitorService } from "./process-monitor/process-monitor.service";
import { ScheduleModule } from "@nestjs/schedule";

@Module({
  imports: [ScheduleModule.forRoot()],
  controllers: [ProcessController],
  providers: [ProcessMonitorService],
})
export class AppModule {}
