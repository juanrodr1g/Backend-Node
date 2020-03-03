import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

//Importacion de Routess
import indexRoutes from './routes/indexRoutes';
import provRoutes from './routes/provRoutes';
import prodRoutes from './routes/prodRoutes';
import clientRoutes from './routes/clientRoutes';
import prodpresRoutes from './routes/prodpresRoutes';
import presupuestoRouter from './routes/presupuestoRouter';

class Server{

    public app: Application;

constructor(){
    this.app =  express();
    this.config();
    this.routes();

}

config():  void {
this.app.set('port', process.env.PORT || 3000);
this.app.use(morgan('dev'));
this.app.use(cors());
this.app.use(express.json());
this.app.use(express.urlencoded({extended: false}));
}


routes(): void {
this.app.use('/',indexRoutes);
this.app.use('/api/proveedores',provRoutes);
this.app.use('/api/productos',prodRoutes);
this.app.use('/api/clientes',clientRoutes);
this.app.use('/api/presupuestos',presupuestoRouter);
this.app.use('/api/prodpres',prodpresRoutes);
}

start(): void {
    this.app.listen(this.app.get('port'), () => {
        console.log('Server on port', this.app.get('port')); 
    });
}


}

const server = new Server();
server.start();