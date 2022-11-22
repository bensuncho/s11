import express, { response } from "express";
import cors from "cors";

const port = 4000;
const server = "127.0.0.1";
const app = express();
app.use(express.json());

app.use(cors());

const estudiantes = [
  {
    Id: 1,
    Nombre: "Pedro Perez",
    Clase: "Python",
  },
  {
    Id: 2,
    Nombre: "Juan Garcia",
    Clase: "Java",
  },
  {
    Id: 3,
    Nombre: "Juana Jaramillo",
    Clase: "JavaScript",
  },
];

app.get("/", (requerimiento, respuesta) => respuesta.send("ok"));
//Ruta para crear o adicionar un nuevo estudiante

app.get("/create", (req, res) => res.send("Creacion ..."));

//Ruta mostrar todos lo etudiantes
app.get("/read", (req, res) => {
  res.json(estudiantes);
});
// Ruta para actualizar
app.get("/update", (req, res) => res.send("Actualizar ..."));
// Ruta para borrar registro
app.get("/delete", (req, res) => res.send("Borrar ..."));

app.listen(port, server, () =>
  console.log(`Servidor web iniciado http://${server}:${port}`)
);
