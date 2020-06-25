export class ResultLogin{
   private _result: boolean;

   constructor(result: boolean){
     this._result = result;
   }

  get result(): boolean {
    return this._result;
  }

  set result(value: boolean) {
    this._result = value;
  }
}
