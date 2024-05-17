import Product from "../models/product.model.js";

export const products = async (req, res) => {
    const productList = await Product.findAll();//Para retornar datos de la db
    res.status(200).json({
        sucess: true,
        //data: [
           // {
          //      subject: "Programacion V",
          //      description: "This is my first API",
          //      hour: "20:10pm",
          //      semestre: "7",
          //      data: new Date().toDateString(),
          //      productList
           // },
        //],
        data: productList
    });
};
