import express, { Application } from "express";
import userRoutes from "../routes/usuario";
import cors from "cors";

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
    this.middleware();
    this.routes();
  }

  //TODO: Conectar base de datos


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
