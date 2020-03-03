import { Request, Response} from 'express';
import pool from '../database';
class PresupuestoController {

    // Metodos del backend para insertar,borrar,listar,listar solo uno, actualizar.

   public async list (req: Request ,res: Response) {
      const presupuestos =  await pool.query('SELECT * FROM presupuestos');
      res.json(presupuestos);
    } 

    public async getOne (req: Request ,res: Response): Promise<any> {
        const { id } = req.params;
       const presupuestos = await pool.query('SELECT * FROM presupuestos WHERE id = ?', [id]);
       if (presupuestos.length > 0){
           return res.json(presupuestos[0]);
       }
       res.status(404).json({text: 'El presupuesto no existe'});
    } 
    
 public async create (req: Request ,res: Response): Promise<void>{
        await pool.query('INSERT INTO presupuestos set ?',[req.body]);
        res.json({message: 'presupuesto saved'})
    }

    public async delete(req: Request, res: Response): Promise<void>{
        const { id } = req.params;
      await pool.query('DELETE FROM presupuestos WHERE id = ?', [id])
      res.json({message: 'El presupuesto ha sido eliminado'});
    }

    public async update(req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('UPDATE presupuestos set ? WHERE id = ?' , [req.body, id ])
        res.json({message: 'El presupuesto ha sido actualizado'})
    }
}

export const presupuestoController = new PresupuestoController();
export default presupuestoController;