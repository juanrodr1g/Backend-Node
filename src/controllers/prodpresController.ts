import { Request, Response} from 'express';
import pool from '../database';
class ProdpresController {

    // Metodos del backend para insertar,borrar,listar,listar solo uno, actualizar.

   public async list (req: Request ,res: Response) {
      const productos_presupuestos =  await pool.query('SELECT * FROM productos_presupuestos');
      res.json(productos_presupuestos);
    } 
    
    public async getOne (req: Request ,res: Response): Promise<any> {
        const { id } = req.params;
       const productos_presupuestos = await pool.query('SELECT * FROM productos_presupuestos WHERE id_presupuesto = ?', [id]);
     
         res.json(productos_presupuestos);
       
       res.status(404).json({text: 'El cliente no existe'});
    } 
    
 public async create (req: Request ,res: Response): Promise<void>{
        await pool.query('INSERT INTO productos_presupuestos set ?',[req.body]);
        res.json({message: 'Producto Presupuesto saved'})
    }

    public async delete(req: Request, res: Response): Promise<void>{
        const { id } = req.params;
      await pool.query('DELETE FROM productos_presupuestos WHERE id = ?', [id])
      res.json({message: 'El cliente ha sido eliminado'});
    }

    public async update(req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('UPDATE productos_presupuestos set ? WHERE id = ?' , [req.body, id ])
        res.json({message: 'El cliente ha sido actualizado'})
    }
}

export const prodpresController = new ProdpresController();
export default prodpresController;