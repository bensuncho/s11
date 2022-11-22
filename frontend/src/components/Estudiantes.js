import { useState, useEffect } from "react"; // Hooks...
import axios from "axios";
import { Table, Container } from "react-bootstrap";

export const Estudiantes = (_) => {
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    axios.get(`http://127.0.0.1:4000/read`).then((res) => setDatos(res.data));
  }, []);
  return (
    <Container>
      <h1> Lista de Frutas </h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Nombre</th>
            <th>Clase</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((dato) => (
            <tr key={dato.Id}>
              <td> {dato.Id}</td>
              <td>{dato.Nombre}</td>
              <td>{dato.Clase}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
