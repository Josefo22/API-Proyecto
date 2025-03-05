import { Router } from 'express';
import * as clienteController from '../controllers/cliente.controller.js';

const router = Router();

router.post('/', clienteController.createCliente);
router.get('/', clienteController.getAllClientes);
router.get('/:id', clienteController.getClienteById);
router.put('/:id', clienteController.updateCliente);
router.delete('/:id', clienteController.deleteCliente);

export default router;