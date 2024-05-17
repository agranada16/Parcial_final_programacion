import express from "express";
import { products } from "../controllers/product.controller.js";


const router = express.Router();

//Forma Larga
//http://localhost:3000

//endpoints
/* router.get("/",(req, res) => {
    //res.send("Hello world");
    res.status(200).json({
        sucess: true,
        data: [
            {
                subject: "Programacion V",
                description: "This is my first API",
                hour: "20:10pm",
                semestre: "7",
                data: new Date().toDateString(),
            },
        ],
    });
}); */

router.get("/", products);
export default router;

//Forma Corta
