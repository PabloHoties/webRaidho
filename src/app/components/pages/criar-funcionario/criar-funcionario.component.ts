import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-criar-funcionario',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './criar-funcionario.component.html',
  styleUrl: './criar-funcionario.component.css'
})
export class CriarFuncionarioComponent {

  constructor(
    private httpClient: HttpClient
  ) { }

  form = new FormGroup({
    nome: new FormControl('', [
      Validators.required, Validators.minLength(8), Validators.maxLength(150)
    ]),
    email: new FormControl('', [
      Validators.required, Validators.email
    ]),
    senha: new FormControl('', [
      Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/)
    ])
  });

  get f() {
    return this.form.controls;
  }


  onSubmit(): void {
    this.httpClient.post('http://localhost:8080' + '/api/funcionarios/cadastro',
    this.form.value)
      .subscribe({
        next: (data) => {
          location.href = '/autenticar-funcionario';
        },
        error: (e) => {
          console.log(e);
         
        }
      })
  }

}
