import { Request, Response} from 'express';
import pool from '../database';
class ClientController {

    // Metodos del backend para insertar,borrar,listar,listar solo uno, actualizar.

   public async list (req: Request ,res: Response) {
      const clientes =  await pool.query('SELECT * FROM clientes');
      res.json(clientes);
    } 

    public async getOne (req: Request ,res: Response): Promise<any> {
        const { id } = req.params;
       const clientes = await pool.query('SELECT * FROM clientes WHERE id = ?', [id]);
       if (clientes.length > 0){
           return res.json(clientes[0]);
       }
       res.status(404).json({text: 'El cliente no existe'});
    } 
    
 public async create (req: Request ,res: Response): Promise<void>{
        await pool.query('INSERT INTO clientes set ?',[req.body]);
        res.json({message: 'cliente saved'})
    }

    public async delete(req: Request, res: Response): Promise<void>{
        const { id } = req.params;
      await pool.query('DELETE FROM clientes WHERE id = ?', [id])
      res.json({message: 'El cliente ha sido eliminado'});
    }

    public async update(req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('UPDATE clientes set ? WHERE id = ?' , [req.body, id ])
        res.json({message: 'El cliente ha sido actualizado'})
    }
}

export const clientController = new ClientController();
export default clientController;