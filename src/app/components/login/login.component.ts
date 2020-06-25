import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../services/login.service';
import { Router } from '@angular/router';
import {ResultLogin} from '../../entities/login.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {VerifyIsLoggedService} from '../../services/verifyIsLogged.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  clave = '';
  result: ResultLogin;

  loginForm = new FormGroup({
    usuario: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private dataService: LoginService, private router: Router, private verify: VerifyIsLoggedService) {
  }

  ngOnInit(): void {
  }

  onLogin(){
    this.dataService.login(this.loginForm.value.usuario, this.loginForm.value.password ).subscribe(
      data => {
        console.log(data);
        // @ts-ignore
        this.result = data;

        if(this.result.result === true){
          console.log('Logged in');
          this.router.navigateByUrl('/mantenimiento');
          this.verify.ingresarValor(true);
        }
      }
    );
  }
}
