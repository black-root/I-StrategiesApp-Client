import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private URL = 'http://localhost:8080/api/strategies/usuarios';

  constructor(private httpClient: HttpClient) { }

  login(username: string, clave: any) {
    return this.httpClient.get(`${this.URL}/login/${username}&${clave}`);
  }
}
