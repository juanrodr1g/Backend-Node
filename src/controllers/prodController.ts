import { Request, Response} from 'express';
import pool from '../database';
class ProdController {

    // Metodos del backend para insertar,borrar,listar,listar solo uno, actualizar.

   public async list (req: Request ,res: Response) {
      const productos =  await pool.query('SELECT * FROM productos');
      res.json(productos);
    } 

    public async getOne (req: Request ,res: Response): Promise<any> {
        const { id } = req.params;
       const productos = await pool.query('SELECT * FROM productos WHERE id = ?', [id]);
       if (productos.length > 0){
           return res.json(productos[0]);
       }
       res.status(404).json({text: 'El producto no existe'});
    } 
    
 public async create (req: Request ,res: Response): Promise<void>{
        await pool.query('INSERT INTO productos set ?',[req.body]);
        res.json({message: 'producto saved'})
    }

    public async delete(req: Request, res: Response): Promise<void>{
        const { id } = req.params;
      await pool.query('DELETE FROM productos WHERE id = ?', [id])
      res.json({message: 'El producto ha sido eliminado'});
    }

    public async update(req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('UPDATE productos set ? WHERE id = ?' , [req.body, id ])
        res.json({message: 'El producto ha sido actualizado'})
    }
}

export const prodController = new ProdController();
export default prodController;