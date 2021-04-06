import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authForm = new FormGroup({
    email: new FormControl('', [Validators.email]),
    password: new FormControl('', [Validators.minLength(8)]),
  });

  cargando = false;
  error = '';

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.cargando = true;
    const values = this.authForm.value;
    this.authService.login(values["email"], values["password"])
      .then((res) => {
        if(res["ok"]){
          this.authService.saveToken(res["resultado"])
          this.authService.redirectToHomePage();
        } else {
          alert(res["resultado"])
        }
        this.cargando = false
      }).catch((error) => {
        this.error = JSON.stringify(error, null, 4);;
      })
      .finally(() => {
        this.cargando = false;
      })
  }
}
