import express from "express";
import { products } from "../controllers/product.controller.js";
import { deleteOne, create } from "../controllers/product.controller.js";

// Crear un enrutador de Express
const router = express.Router();

// Rutas de la forma larga
// Comentadas para referencia
/*
router.get("/",(req, res) => {
    res.status(200).json({
        success: true,
        data: [
            {
                subject: "Programacion V",
                description: "This is my first API",
                hour: "20:10pm",
                semestre: "7",
                date: new Date().toDateString(),
            },
        ],
    });
});
*/

// Rutas de la forma corta utilizando controladores de productos
router.get("/", products); // Obtener todos los productos
router.delete("/:id", deleteOne); // Eliminar un producto por su ID
router.post("/", create); // Crear un nuevo producto

// Exportar el enrutador para ser utilizado en otros archivos
export default router;

//El código tiene dos secciones: una forma larga de definir rutas y una forma corta que utiliza los controladores
// de productos para manejar las solicitudes HTTP. La forma corta es preferible ya que separa la lógica de enrutamiento 
//de la lógica de manejo de solicitudes en controladores dedicados.
