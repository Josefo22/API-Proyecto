import { Request, Response } from 'express';
import Cliente from '../models/Cliente.js';

export const createCliente = async (req: Request, res: Response) => {
  try {
    const cliente = await Cliente.create(req.body);
    res.status(201).json(cliente);
  } catch (error) {
    res.status(400).json({ error: error instanceof Error ? error.message : 'Error creating cliente' });
  }
};

export const getAllClientes = async (req: Request, res: Response) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : 'Error fetching clientes' });
  }
};

export const getClienteById = async (req: Request, res: Response) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) {
      return res.status(404).json({ error: 'Cliente not found' });
    }
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : 'Error fetching cliente' });
  }
};

export const updateCliente = async (req: Request, res: Response) => {
  try {
    const [updated] = await Cliente.update(req.body, {
      where: { id: req.params.id }
    });
    
    if (updated === 0) {
      return res.status(404).json({ error: 'Cliente not found' });
    }
    
    const updatedCliente = await Cliente.findByPk(req.params.id);
    res.json(updatedCliente);
  } catch (error) {
    res.status(400).json({ error: error instanceof Error ? error.message : 'Error updating cliente' });
  }
};

export const deleteCliente = async (req: Request, res: Response) => {
  try {
    const deleted = await Cliente.destroy({
      where: { id: req.params.id }
    });
    
    if (deleted === 0) {
      return res.status(404).json({ error: 'Cliente not found' });
    }
    
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : 'Error deleting cliente' });
  }
};