import express, { Application } from "express";
import userRoutes from "../routes/usuario";
import cors from "cors";
import db from "../db/connection";

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    usuarios: "/api/usuarios",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8080";

    //metodos iniciales
    this.dbConnection();
    this.middleware();
    this.routes();
  }

  async dbConnection() {
    try {
      await db.authenticate();
      console.log("db online");
    } catch (error) {
      throw new Error();
    }
  }

  middleware() {
    //cors
    this.app.use(cors());
    //git

    //lectura del body
    this.app.use(express.json());

    //carpeta publica
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.apiPaths.usuarios, userRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo. " + this.port);
    });
  }
}

export default Server;
