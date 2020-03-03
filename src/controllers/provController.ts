import { Request, Response} from 'express';
import pool from '../database';
class ProvController {

    // Metodos del backend para insertar,borrar,listar,listar solo uno, actualizar.

   public async list (req: Request ,res: Response) {
      const proveedores =  await pool.query('SELECT * FROM proveedores');
      res.json(proveedores);
    } 

    public async getOne (req: Request ,res: Response): Promise<any> {
        const { id } = req.params;
       const proveedores = await pool.query('SELECT * FROM proveedores WHERE id = ?', [id]);
       if (proveedores.length > 0){
           return res.json(proveedores[0]);
       }
       res.status(404).json({text: 'El proveedor no existe'});
    } 
    
 public async create (req: Request ,res: Response): Promise<void>{
        await pool.query('INSERT INTO proveedores set ?',[req.body]);
        res.json({message: 'proveedor saved'})
    }

    public async delete(req: Request, res: Response): Promise<void>{
        const { id } = req.params;
      await pool.query('DELETE FROM proveedores WHERE id = ?', [id])
      res.json({message: 'El proveedor ha sido eliminado'});
    }

    public async update(req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('UPDATE proveedores set ? WHERE id = ?' , [req.body, id ])
        res.json({message: 'El proveedor ha sido actualizado'})
    }
}

export const provController = new ProvController();
export default provController;