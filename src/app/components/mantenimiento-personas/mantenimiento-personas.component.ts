import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {Personas} from '../../entities/persona.model';
import {PersonaService} from '../../services/persona.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-mantenimiento-personas',
  templateUrl: './mantenimiento-personas.component.html',
  styleUrls: ['./mantenimiento-personas.component.css']
})
export class MantenimientoPersonasComponent implements OnInit {

  persona: Personas = new Personas(0, '', '', '', '', null, 1, '');
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

  constructor(private personaService: PersonaService, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  onCrearPersona() {
    this.persona.sexo = Number(this.selectedSexo);
    this.persona.idPersona = Number(this.idPersona);
    console.log('Objecto persona al crear');
    this.personaService.createPersona(this.persona);
    console.log(this.persona);
    this.openSnackBar("Persona creada!", "Crear");
  //this.personaService.createPersona(new Personas(22, 'Hola', '', 'Mundo', '',new Date(),1,''));
  }

  onBuscarById() {
    this.personaService.findById(this.idPersona).subscribe(
      data => {
        if (data !== null) {
          this.habilitarEditarEliminar = true;
          // @ts-ignore
          this.persona = data;
          if (this.persona.sexo === 1) {
            this.selectedSexo = '1';
          } else if (this.persona.sexo === 2) {
            this.selectedSexo = '2';
          }
          this.openSnackBar("Persona encontrada!", "Buscar");
        } else {
          console.log('es nula la persona');
          this.limpiarCampos();
          this.openSnackBar("Persona no encontrada!", "Buscar");
        }
        console.log(this.persona);
      }
    );
  }

  onActualizarPersona() {
    this.persona.sexo = Number(this.selectedSexo);
    this.persona.idPersona = Number(this.idPersona);
    //this.persona.fechaNacimiento = new Date(this.persona.fechaNacimiento).toISOString().substring(0, 10);
    console.log('Objecto persona al Actualizar');
    console.log(this.persona);
    this.personaService.updatePersona(this.idPersona, this.persona);
    this.limpiarCampos();
    this.openSnackBar("Persona Actualizada!", "Actualizar");
  }

  onDeletePersona() {
    if (this.idPersona !== null) {
      this.personaService.deletePersona(this.idPersona);
      this.limpiarCampos();
      this.openSnackBar("Persona Eliminada!", "Eliminar");
    }
  }

  limpiarCampos() {
    this.persona = new Personas(null, '', '', '', '', null, null, '');
    this.idPersona = '';
    this.selectedSexo = '';
    this.habilitarEditarEliminar = false;
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
