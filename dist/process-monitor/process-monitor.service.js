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
exports.ProcessMonitorService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const child_process_1 = require("child_process");
const rxjs_1 = require("rxjs");
let ProcessMonitorService = class ProcessMonitorService {
    monitorProcesses() {
        return new rxjs_1.Observable((observer) => {
            (0, child_process_1.exec)("ps aux", (error, stdout) => {
                if (error) {
                    observer.error(error);
                }
                else {
                    observer.next(stdout);
                }
                observer.complete();
            });
        });
    }
};
exports.ProcessMonitorService = ProcessMonitorService;
__decorate([
    (0, schedule_1.Interval)(5000),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", rxjs_1.Observable)
], ProcessMonitorService.prototype, "monitorProcesses", null);
exports.ProcessMonitorService = ProcessMonitorService = __decorate([
    (0, common_1.Injectable)()
], ProcessMonitorService);
//# sourceMappingURL=process-monitor.service.js.map