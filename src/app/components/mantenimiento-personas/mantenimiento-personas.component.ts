import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {Personas} from '../../entities/persona.model';
import {PersonaService} from '../../services/persona.service';

@Component({
  selector: 'app-mantenimiento-personas',
  templateUrl: './mantenimiento-personas.component.html',
  styleUrls: ['./mantenimiento-personas.component.css']
})
export class MantenimientoPersonasComponent implements OnInit {

  persona: Personas = new Personas(0,'','','','','',1,'');
  idPersona: any = '';
  selectedSexo: any = '';
  habilitarEditarEliminar = false;
  primerNombreFormControl = new FormControl('', [
    Validators.required
  ]);

  primerApellidoFormControl = new FormControl('', [
    Validators.required
  ]);
  fechaFormControl = new FormControl('', [
    Validators.required,
  ]);

  matcher = new MyErrorStateMatcher();


  selected = new FormControl('Hombre', [
    Validators.required,
    Validators.pattern('Hombre'),
  ]);

  selectFormControl = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  nativeSelectFormControl = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  constructor(private personaService: PersonaService) {
  }

  ngOnInit(): void {
  }

  onCrearPersona(){
    this.persona.sexo = Number(this.selectedSexo);
    this.persona.idPersona = Number(this.idPersona);
    this.persona.fechaNacimiento = new Date(this.persona.fechaNacimiento).toISOString().substring(0, 10);
    console.log('Objecto persona al crear');
    console.log(this.persona);
    this.personaService.createPersona(this.persona);
  }

  onBuscarById(){
    this.personaService.findById(this.idPersona).subscribe(
      data => {
        if(data !== null){
          this.habilitarEditarEliminar = true;
          // @ts-ignore
          this.persona = data;
          if(this.persona.sexo === 1 ){
            this.selectedSexo = '1';
          } else if(this.persona.sexo === 2) {
            this.selectedSexo = '2';
          }
        }else {
          console.log('es nula la persona');
          this.limpiarCampos();
        }
        console.log(this.persona);
      }
    );
  }

  onActualizarPersona(){
    this.persona.sexo = Number(this.selectedSexo);
    this.persona.idPersona = Number(this.idPersona);
    this.persona.fechaNacimiento = new Date(this.persona.fechaNacimiento).toISOString().substring(0, 10);
    console.log('Objecto persona al Actualizar');
    console.log(this.persona);
    this.personaService.updatePersona(this.idPersona, this.persona);
    this.limpiarCampos();
  }

  limpiarCampos(){
    this.persona = new Personas(null,'','','','','',null, '');
    this.idPersona = '';
    this.selectedSexo = '';
    this.habilitarEditarEliminar = false;
  }

}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
