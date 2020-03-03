"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ProdpresController {
    // Metodos del backend para insertar,borrar,listar,listar solo uno, actualizar.
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const productos_presupuestos = yield database_1.default.query('SELECT * FROM productos_presupuestos');
            res.json(productos_presupuestos);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const productos_presupuestos = yield database_1.default.query('SELECT * FROM productos_presupuestos WHERE id_presupuesto = ?', [id]);
            res.json(productos_presupuestos);
            res.status(404).json({ text: 'El cliente no existe' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO productos_presupuestos set ?', [req.body]);
            res.json({ message: 'Producto Presupuesto saved' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM productos_presupuestos WHERE id = ?', [id]);
            res.json({ message: 'El cliente ha sido eliminado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE productos_presupuestos set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'El cliente ha sido actualizado' });
        });
    }
}
exports.prodpresController = new ProdpresController();
exports.default = exports.prodpresController;
