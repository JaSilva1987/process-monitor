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
exports.ProcessController = void 0;
const common_1 = require("@nestjs/common");
const process_monitor_service_1 = require("./process-monitor.service");
let ProcessController = class ProcessController {
    constructor(processMonitorService) {
        this.processMonitorService = processMonitorService;
    }
    async getProcesses() {
        return await this.processMonitorService.monitorProcesses().toPromise();
    }
};
exports.ProcessController = ProcessController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProcessController.prototype, "getProcesses", null);
exports.ProcessController = ProcessController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [process_monitor_service_1.ProcessMonitorService])
], ProcessController);
//# sourceMappingURL=process-monitor.controller.js.map