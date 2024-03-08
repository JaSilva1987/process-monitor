import { ProcessMonitorService } from "./process-monitor.service";
export declare class ProcessController {
    private readonly processMonitorService;
    constructor(processMonitorService: ProcessMonitorService);
    getProcesses(): Promise<string>;
}
