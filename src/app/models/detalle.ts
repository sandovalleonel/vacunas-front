import { NombreVacuna } from "./nombre-vacuna";

export class Detalle {
      
    id !:number;
    fechaNacimiento !:Date;
    domicilio !:string;
    telefono !:string;
    estadoVacuna !:boolean;
    vacuna !:NombreVacuna;
    fechaVacuna !:Date;
    numeroDosis !:number;
}
