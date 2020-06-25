export class Personas{
  private _idPersona: number;
  private _primerNombre: string;
  private _primerApellido: string;
  private _segundoNombre: string;
  private _segundoApellido: string;
  private _fechaNacimiento: string;
  private _sexo: number;
  private _informacionAdicional: string;

  constructor(idPersona: number, primerNombre: string, primerApellido: string, segundoNombre: string, segundoApellido: string, fechaNacimiento: string, sexo: number, informacionAdicional: string) {
    this._idPersona = idPersona;
    this._primerNombre = primerNombre;
    this._primerApellido = primerApellido;
    this._segundoNombre = segundoNombre;
    this._segundoApellido = segundoApellido;
    this._fechaNacimiento = fechaNacimiento;
    this._sexo = sexo;
    this._informacionAdicional = informacionAdicional;
  }
  get idPersona(): number {
    return this._idPersona;
  }

  set idPersona(value: number) {
    this._idPersona = value;
  }

  get primerNombre(): string {
    return this._primerNombre;
  }

  set primerNombre(value: string) {
    this._primerNombre = value;
  }

  get primerApellido(): string {
    return this._primerApellido;
  }

  set primerApellido(value: string) {
    this._primerApellido = value;
  }

  get segundoNombre(): string {
    return this._segundoNombre;
  }

  set segundoNombre(value: string) {
    this._segundoNombre = value;
  }

  get segundoApellido(): string {
    return this._segundoApellido;
  }

  set segundoApellido(value: string) {
    this._segundoApellido = value;
  }

  get fechaNacimiento(): string {
    return this._fechaNacimiento;
  }

  set fechaNacimiento(value: string) {
    this._fechaNacimiento = value;
  }

  get sexo(): number {
    return this._sexo;
  }

  set sexo(value: number) {
    this._sexo = value;
  }

  get informacionAdicional(): string {
    return this._informacionAdicional;
  }

  set informacionAdicional(value: string) {
    this._informacionAdicional = value;
  }
}
