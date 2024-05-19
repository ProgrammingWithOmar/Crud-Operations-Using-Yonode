import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createItem = async (req, res) => {
    const { name, description } = req.body;
    try {
        const item = await prisma.item.create({
            data: {
                name,
                description
            }
        });
        res.status(201).json(item);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getItems = async (req, res) => {
    try {
        const items = await prisma.item.findMany();
        res.json(items);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateItem = async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    try {
        const item = await prisma.item.update({
            where: { id: parseInt(id) },
            data: { name, description }
        });
        res.json(item);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteItem = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.item.delete({
            where: { id: parseInt(id) }
        });
        res.json({ message: 'Item deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


