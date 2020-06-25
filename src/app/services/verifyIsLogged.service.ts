import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VerifyIsLoggedService {
  constructor(){ }

  private _checked: boolean = false;

  ingresarValor(value: boolean){
    this._checked = value;
  }

  get checked(): boolean {
    return this._checked;
  }
}
