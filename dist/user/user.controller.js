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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_create_dto_1 = require("./dto/user.create.dto");
const user_update_dto_1 = require("./dto/user.update.dto");
const user_service_1 = require("./user.service");
const common_1 = require("@nestjs/common");
let UserController = class UserController {
    constructor(UserService) {
        this.UserService = UserService;
    }
    getUser() {
        return this.UserService.get();
    }
    async registration(CreateUserDto) {
        console.log("createUserDto", CreateUserDto);
        return this.UserService.create(CreateUserDto);
    }
    async forgetPass(UpdatePassDto) {
        const emailFor = UpdatePassDto.email;
        const passwordFor = UpdatePassDto.password;
        this.UserService.forgetPass(emailFor, passwordFor);
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getUser", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_create_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "registration", null);
__decorate([
    (0, common_1.Patch)('/forgetPass'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_update_dto_1.UpdatePassDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "forgetPass", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map