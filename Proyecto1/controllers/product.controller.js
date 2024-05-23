import Product from "../models/product.model.js";

// Controlador para obtener todos los productos
export const products = async (req, res) => {
    try {
        // Buscar todos los productos en la base de datos
        const productList = await Product.findAll();
        
        // Responder con una lista de productos y un mensaje de éxito
        res.status(200).json({
            success: true,
            data: productList
        });
    } catch (error) {
        // Manejar cualquier error y responder con un mensaje de error
        res.status(500).json({
            success: false,
            message: "Error al obtener los productos."
        });
    }
};

// Controlador para eliminar un producto por su ID
export const deleteOne = (req, res) => {
    const id = req.params.id;

    // Eliminar el producto de la base de datos usando su ID
    Product.destroy({
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            // Si se elimina correctamente, responder con un mensaje de éxito
            res.status(200).send({
                success: true,
                message: "Producto eliminado exitosamente."
            });
        } else {
            // Si no se encuentra el producto, responder con un mensaje de error
            res.status(404).send({
                success: false,
                message: `No se encontró el producto con el id=${id}.`
            });
        }
    })
    .catch(err => {
        // Manejar cualquier error y responder con un mensaje de error
        res.status(500).send({
            success: false,
            message: "No se pudo eliminar el producto con id=" + id
        });
    });
};

// Controlador para crear un nuevo producto
export const create = (req, res) => {
    // Verificar si el campo 'name' está presente en la solicitud
    if (!req.body.name) {
        // Si 'name' no está presente, responder con un mensaje de error
        res.status(400).send({
            success: false,
            message: "El nombre del producto no puede estar vacío."
        });
        return;
    }

    // Crear un objeto con los datos del nuevo producto
    const nuevoProducto = {
        name: req.body.name,
        category: req.body.category,
        description: req.body.description,
        price: req.body.price,
        createdAt: new Date() // Establecer la fecha de creación como la fecha actual
    };

    // Guardar el nuevo producto en la base de datos
    Product.create(nuevoProducto)
    .then(data => {
        // Si se crea correctamente, responder con los datos del nuevo producto
        res.status(201).send({
            success: true,
            data: data,
            message: "Producto creado exitosamente."
        });
    })
    .catch(err => {
        // Manejar cualquier error y responder con un mensaje de error
        res.status(500).send({
            success: false,
            message: err.message || "Error al crear el producto."
        });
    });
};
