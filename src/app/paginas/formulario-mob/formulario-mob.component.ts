import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formulario-mob',
  templateUrl: './formulario-mob.component.html',
  styleUrls: ['./formulario-mob.component.css']
})
export class FormularioMobComponent {
  checkoutForm: FormGroup;
 public endereco:any;
  constructor(private formBuilder: FormBuilder,
    private http: HttpClient) {
    this.checkoutForm = this.formBuilder.group({
      usuario: ["",[Validators.required]],
      email: ["",[Validators.required]],
      cep: ["",[Validators.required]],
    });
  } 
  get usuario(){
    return this.checkoutForm.get("usuario")
  }
  get email(){
    return this.checkoutForm.get("email")
  }
  
  get cep(){
    return this.checkoutForm.get("cep")
  }
buscarcep(){ 
console.log(this.checkoutForm.get("cep"))
  this.http.get("https://viacep.com.br/ws/"+ this.checkoutForm.get("cep")?.value+"/json/").subscribe({
    next: (endereco) =>{
     this.endereco=endereco
    }
  })
}
}

