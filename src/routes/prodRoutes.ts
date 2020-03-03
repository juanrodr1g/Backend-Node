import { Router } from 'express';
import {prodController} from '../controllers/prodController';
class ProdRoutes {

public router: Router = Router();


constructor(){
this.config();
}

config(): void {
    this.router.get('/',prodController.list);
    this.router.get('/:id',prodController.getOne);
    this.router.post('/', prodController.create);
    this.router.delete('/:id', prodController.delete);
    this.router.put('/:id', prodController.update);
}

}

const prodRoutes = new ProdRoutes();
export default prodRoutes.router;