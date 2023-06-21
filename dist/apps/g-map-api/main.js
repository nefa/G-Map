/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const app_controller_1 = __webpack_require__(5);
const app_service_1 = __webpack_require__(6);
const config_1 = __webpack_require__(7);
const typeorm_1 = __webpack_require__(8);
const users_module_1 = __webpack_require__(9);
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    type: 'postgres',
                    host: configService.get('DB_HOST'),
                    port: +configService.get('DB_PORT'),
                    username: configService.get('DB_USERNAME'),
                    password: configService.get('DB_PASSWORD'),
                    database: configService.get('DB_NAME'),
                    entities: [],
                    synchronize: true,
                    ssl: true,
                    extra: {
                        ssl: {
                            rejectUnauthorized: false,
                        },
                    },
                }),
                inject: [config_1.ConfigService],
            }),
            users_module_1.UsersModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const app_service_1 = __webpack_require__(6);
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "getData", null);
AppController = tslib_1.__decorate([
    (0, common_1.Controller)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);
exports.AppController = AppController;


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
let AppService = class AppService {
    getData() {
        return ({ message: 'Hello API' });
    }
};
AppService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;


/***/ }),
/* 7 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 8 */
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const users_controller_1 = __webpack_require__(10);
const users_service_1 = __webpack_require__(11);
const user_entity_1 = __webpack_require__(13);
const typeorm_1 = __webpack_require__(8);
let UsersModule = class UsersModule {
};
UsersModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.User])],
        controllers: [users_controller_1.UsersController],
        providers: [users_service_1.UsersService]
    })
], UsersModule);
exports.UsersModule = UsersModule;


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersController = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const users_service_1 = __webpack_require__(11);
const user_entity_1 = __webpack_require__(13);
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    //get all users
    findAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.usersService.findAll();
        });
    }
    //get user by id
    findOne(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.usersService.findOne(id);
            if (!user) {
                throw new common_1.NotFoundException('User does not exist!');
            }
            else {
                return user;
            }
        });
    }
    //create user
    create(user) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.usersService.create(user);
        });
    }
    //update user
    update(id, user) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.usersService.update(id, user);
        });
    }
    //delete user
    delete(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            //handle error if user does not exist
            const user = yield this.usersService.findOne(id);
            if (!user) {
                throw new common_1.NotFoundException('User does not exist!');
            }
            return this.usersService.delete(id);
        });
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], UsersController.prototype, "findAll", null);
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], UsersController.prototype, "findOne", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _d : Object]),
    tslib_1.__metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], UsersController.prototype, "create", null);
tslib_1.__decorate([
    (0, common_1.Put)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, typeof (_f = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _f : Object]),
    tslib_1.__metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], UsersController.prototype, "update", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], UsersController.prototype, "delete", null);
UsersController = tslib_1.__decorate([
    (0, common_1.Controller)('users'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object])
], UsersController);
exports.UsersController = UsersController;


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersService = void 0;
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(8);
const typeorm_2 = __webpack_require__(12);
const user_entity_1 = __webpack_require__(13);
let UsersService = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    findAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.userRepository.find();
        });
    }
    findOne(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.userRepository.findOne({ where: { id } });
        });
    }
    create(user) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const newuser = this.userRepository.create(user);
            return this.userRepository.save(newuser);
        });
    }
    update(id, user) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.userRepository.update(id, user);
            return this.userRepository.findOne({ where: { id } });
        });
    }
    delete(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.userRepository.delete(id);
        });
    }
};
UsersService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], UsersService);
exports.UsersService = UsersService;


/***/ }),
/* 12 */
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
const tslib_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(12);
let User = class User {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "email", void 0);
User = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], User);
exports.User = User;


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const core_1 = __webpack_require__(3);
const app_module_1 = __webpack_require__(4);
function bootstrap() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        const port = process.env.PORT || 3000;
        yield app.listen(port);
        common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
    });
}
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map