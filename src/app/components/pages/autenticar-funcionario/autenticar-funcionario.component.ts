import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-autenticar-funcionario',
  imports: [ 
    RouterLink, CommonModule, FormsModule, ReactiveFormsModule
  ],
  templateUrl: './autenticar-funcionario.component.html',
  styleUrl: './autenticar-funcionario.component.css'
})
export class AutenticarFuncionarioComponent {

  constructor(
    private httpClient: HttpClient
  ) { }

  formulario = new FormGroup({
    nome : new FormControl('', [Validators.required,
    Validators.minLength(8)]),
    email : new FormControl('', [Validators.required, Validators.email]),
    senha : new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/)])
  })

  get f() {
    return this.formulario.controls;
    }

  onSubmit(){
    console.log(this.formulario.value);
  }
    

}
