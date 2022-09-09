import { Detalle } from "./detalle";

export class Usuario {
      id !:number;
      cedula !:string;
      nombres !:string;
      apellidos !:string;
      email !:string;
      detalle !:Detalle;
}
