export class Personas {
  idPersona: number;
  primerNombre: string;
  primerApellido: string;
  segundoNombre: string;
  segundoApellido: string;
  fechaNacimiento: Date;
  sexo: number;
  informacionAdicional: string;

  constructor(idPersona: number, primerNombre: string, primerApellido: string, segundoNombre: string, segundoApellido: string, fechaNacimiento: Date, sexo: number, informacionAdicional: string) {
    this.idPersona = idPersona;
    this.primerNombre = primerNombre;
    this.primerApellido = primerApellido;
    this.segundoNombre = segundoNombre;
    this.segundoApellido = segundoApellido;
    this.fechaNacimiento = fechaNacimiento;
    this.sexo = sexo;
    this.informacionAdicional = informacionAdicional;
  }

}
