import { Router } from 'express';
import {provController} from '../controllers/provController';
class ProvRoutes {

public router: Router = Router();


constructor(){
this.config();
}

config(): void {
    this.router.get('/',provController.list);
    this.router.get('/:id',provController.getOne);
    this.router.post('/', provController.create);
    this.router.delete('/:id', provController.delete);
    this.router.put('/:id', provController.update);
}

}

const provRoutes = new ProvRoutes();
export default provRoutes.router;