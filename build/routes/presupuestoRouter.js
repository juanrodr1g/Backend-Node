"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const presupuestoController_1 = require("../controllers/presupuestoController");
class PresupuestoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', presupuestoController_1.presupuestoController.list);
        this.router.get('/:id', presupuestoController_1.presupuestoController.getOne);
        this.router.post('/', presupuestoController_1.presupuestoController.create);
        this.router.delete('/:id', presupuestoController_1.presupuestoController.delete);
        this.router.put('/:id', presupuestoController_1.presupuestoController.update);
    }
}
const presupuestoRoutes = new PresupuestoRoutes();
exports.default = presupuestoRoutes.router;
