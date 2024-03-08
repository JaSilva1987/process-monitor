import { OnGatewayInit } from "@nestjs/websockets";
import { Server } from "socket.io";
import { ProcessMonitorService } from "./process-monitor.service";
export declare class ProcessMonitorGateway implements OnGatewayInit {
    private readonly processMonitorService;
    server: Server;
    constructor(processMonitorService: ProcessMonitorService);
    afterInit(server: Server): void;
}
