"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CpuModule = void 0;
var common_1 = require("@nestjs/common");
var cpu_service_1 = require("./cpu.service");
var power_module_1 = require("../power/power.module");
var CpuModule = /** @class */ (function () {
    function CpuModule() {
    }
    CpuModule = __decorate([
        (0, common_1.Module)({
            imports: [power_module_1.PowerModule],
            providers: [cpu_service_1.CpuService],
            exports: [cpu_service_1.CpuService]
        })
    ], CpuModule);
    return CpuModule;
}());
exports.CpuModule = CpuModule;
