"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prodpresController_1 = require("../controllers/prodpresController");
class ProdpresRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', prodpresController_1.prodpresController.list);
        this.router.get('/:id', prodpresController_1.prodpresController.getOne);
        this.router.post('/', prodpresController_1.prodpresController.create);
        this.router.delete('/:id', prodpresController_1.prodpresController.delete);
        this.router.put('/:id', prodpresController_1.prodpresController.update);
    }
}
const prodpresRoutes = new ProdpresRoutes();
exports.default = prodpresRoutes.router;
