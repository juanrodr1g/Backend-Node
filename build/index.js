"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
//Importacion de Routess
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const provRoutes_1 = __importDefault(require("./routes/provRoutes"));
const prodRoutes_1 = __importDefault(require("./routes/prodRoutes"));
const clientRoutes_1 = __importDefault(require("./routes/clientRoutes"));
const prodpresRoutes_1 = __importDefault(require("./routes/prodpresRoutes"));
const presupuestoRouter_1 = __importDefault(require("./routes/presupuestoRouter"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/proveedores', provRoutes_1.default);
        this.app.use('/api/productos', prodRoutes_1.default);
        this.app.use('/api/clientes', clientRoutes_1.default);
        this.app.use('/api/presupuestos', presupuestoRouter_1.default);
        this.app.use('/api/prodpres', prodpresRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
