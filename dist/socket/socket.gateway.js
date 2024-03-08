"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const process_monitor_service_1 = require("../process-monitor/process-monitor.service");
let SocketGateway = class SocketGateway {
    constructor(processMonitorService) {
        this.processMonitorService = processMonitorService;
    }
    afterInit() {
        this.processMonitorService.monitorProcesses().subscribe((data) => {
            const processesArray = data.split("\n");
            const lastProcess = processesArray[processesArray.length - 2];
            const processInfo = lastProcess.split(/\s+/);
            const processName = processInfo[10];
            const dateTime = new Date().toLocaleString();
            const processInfoToSend = {
                processName,
                dateTime,
            };
            this.server.emit("processes", processInfoToSend);
        });
    }
};
exports.SocketGateway = SocketGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], SocketGateway.prototype, "server", void 0);
exports.SocketGateway = SocketGateway = __decorate([
    (0, websockets_1.WebSocketGateway)(),
    __metadata("design:paramtypes", [process_monitor_service_1.ProcessMonitorService])
], SocketGateway);
//# sourceMappingURL=socket.gateway.js.map