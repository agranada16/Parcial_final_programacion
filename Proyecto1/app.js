import express from "express";
import cors from "cors";
import productRouter from "./routes/product.route.js";
import db from "./database/db.js";

const app = express() //Inicializa estancia
const port = process.env.PORT || 3000 //Puerto para desplegar la API

//bd conection
const databaseConnection = async () => {
   try {
     await db.authenticate();
     db.sync(); // crea las tablas en la db ( si no existen )
     console.log("Connection has been established successfully.");
   } catch (error) {
     console.error("Unable to connect to the database:", error.message);
   }
};
databaseConnection();



app.use(express.json()); //envio-recepcion de informacion en formato tipo Json
app.use(cors()); //Consumo de API desde otros puertos diferentes al PORT
app.use(express.static("public")); //Contenedor de archivos estaticos - carpeta publica
//http://localhost:3000
app.use("/products", productRouter);

//endpoints
/* app.get("/products",(req, res) => {
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

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});


