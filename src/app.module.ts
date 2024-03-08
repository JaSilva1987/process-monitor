import { Module } from '@nestjs/common';
import { ProcessController } from './process-monitor/process-monitor.controller';
import { ProcessMonitorService } from './process-monitor/process-monitor.service';

@Module({
  imports: [],
  controllers: [ProcessController],
  providers: [ProcessMonitorService],
})
export class AppModule {}
