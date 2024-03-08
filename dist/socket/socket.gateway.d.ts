import { OnGatewayInit } from "@nestjs/websockets";
import { Server } from "socket.io";
import { ProcessMonitorService } from "src/process-monitor/process-monitor.service";
export declare class SocketGateway implements OnGatewayInit {
    private processMonitorService;
    constructor(processMonitorService: ProcessMonitorService);
    server: Server;
    afterInit(): void;
}
