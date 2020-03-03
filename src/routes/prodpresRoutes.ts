import { Router } from 'express';
import {prodpresController} from '../controllers/prodpresController';
class ProdpresRoutes {

public router: Router = Router();


constructor(){
this.config();
}

config(): void {
    this.router.get('/',prodpresController.list);
    this.router.get('/:id',prodpresController.getOne);
    this.router.post('/', prodpresController.create);
    this.router.delete('/:id', prodpresController.delete);
    this.router.put('/:id', prodpresController.update);
}

}

const prodpresRoutes = new ProdpresRoutes();
export default prodpresRoutes.router;