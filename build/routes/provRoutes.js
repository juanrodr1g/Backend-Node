"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const provController_1 = require("../controllers/provController");
class ProvRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', provController_1.provController.list);
        this.router.get('/:id', provController_1.provController.getOne);
        this.router.post('/', provController_1.provController.create);
        this.router.delete('/:id', provController_1.provController.delete);
        this.router.put('/:id', provController_1.provController.update);
    }
}
const provRoutes = new ProvRoutes();
exports.default = provRoutes.router;
