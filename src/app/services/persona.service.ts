import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Personas} from '../entities/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private URL = 'http://localhost:8080/api/strategies/personas';
  private headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': 'true',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'});

  constructor(private httpClient: HttpClient) {
  }

  findById(id: any) {
    return this.httpClient.get(`${this.URL}/${id}`);
  }

  createPersona(persona: Personas) {
    this.httpClient.post(`${this.URL}`, persona).subscribe(
      response => {
        console.log('Resultado guardar persona ');
        console.log(response);
      }, error => console.log(error)
    );
  }

  updatePersona(id: any, persona: Personas) {
    // @ts-ignore
    this.httpClient.put(`${this.URL}/${id}`, persona).subscribe(
      response => {
        console.log('Resultado Actualizar persona ');
        console.log(response);
      }, error => console.log('Error al Actualizar persona ' + error)
    );
  }

  deletePersona(id: any) {
    // @ts-ignore
    this.httpClient.delete(`${this.URL}/${id}`).subscribe(
      response => {
        console.log('Resultado Eliminar por id persona ');
        console.log(response);
      }, error => console.log('Error al Eliminar por id persona ' + error)
    );
  }

  }
