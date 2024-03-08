import { Controller, Get } from '@nestjs/common';
import { ProcessMonitorService } from './process-monitor.service';

@Controller('process')
export class ProcessController {
  constructor(private readonly processMonitorService: ProcessMonitorService) {}

  @Get()
  async getProcesses(): Promise<string> {
    return await this.processMonitorService.monitorProcesses().toPromise();
  }
}
