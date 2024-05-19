import express from 'express';
import { createItem, deleteItem, getItems, updateItem } from '../controllers/itemController.js';
const itemRoutes = express.Router();



itemRoutes.post('/', createItem);
itemRoutes.get('/', getItems);
itemRoutes.put('/:id', updateItem);
itemRoutes.delete('/:id', deleteItem);

export default itemRoutes