import { Router } from 'express';
import {clientController} from '../controllers/clientController';
class ClientRoutes {

public router: Router = Router();


constructor(){
this.config();
}

config(): void {
    this.router.get('/',clientController.list);
    this.router.get('/:id',clientController.getOne);
    this.router.post('/', clientController.create);
    this.router.delete('/:id', clientController.delete);
    this.router.put('/:id', clientController.update);
}

}

const clientRoutes = new ClientRoutes();
export default clientRoutes.router;