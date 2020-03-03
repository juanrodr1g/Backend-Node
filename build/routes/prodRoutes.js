"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prodController_1 = require("../controllers/prodController");
class ProdRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', prodController_1.prodController.list);
        this.router.get('/:id', prodController_1.prodController.getOne);
        this.router.post('/', prodController_1.prodController.create);
        this.router.delete('/:id', prodController_1.prodController.delete);
        this.router.put('/:id', prodController_1.prodController.update);
    }
}
const prodRoutes = new ProdRoutes();
exports.default = prodRoutes.router;
