import { Component, OnInit } from '@angular/core';
import { Questionario } from './reserva.model';
import { from } from 'rxjs';
import { FormsService } from '../forms.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component ({

  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  listaReservas: Questionario;

  Nome_Clientes: string;
  E_mail: string;
  Morada_Clientes: string;
  Localidade: string;
  Codigo_postal: number;
  Pais: string;
  Telefone: number;

caminhoparaservice : FormsService;

constructor(private formBuilder: FormBuilder, private caminho : FormsService) {
  this.caminhoparaservice = caminho;
}

questionarioForm: FormGroup;


ngOnInit() {

  this.questionarioForm = this.formBuilder.group({

  Nome_Clientes: ['',Validators.required],
  Morada_Clientes: ['',Validators.required],
  E_mail: ['', Validators.required],
  Localidade: ['', Validators.required],
  Codigo_postal: ['', Validators.required],
  Pais: ['', Validators.required],
  Telefone: ['',Validators.required],
});
  }

onSubmit() {
console.log(this.questionarioForm);
this.caminhoparaservice.createClientes(this.questionarioForm.value)
  .subscribe(data => {
   console.log(JSON.stringify(data));
    //this.router.naviga

});
}

}







/*
  formsService: any;
  router: any;
  addFormulario() {
    // tslint:disable-next-line: max-line-length
    this.listaReservas = new Questionario(this.Nome_Clientes, this.E_mail, this.Morada_Clientes, this.Localidade, this.Codigo_postal, this.Pais, this.Telefone);
    //this.caminhoparaservice.createClientes(this.listaReservas);
    //console.log(this.listaReservas);
  }



  ngOnInit() {
  }

  onSubmit(){
    console.log(this.addFormulario);
    this.formsService.createClientes(this.addFormulario)
      .subscribe(data=> {
        console.log(data);
        this.router.navigate(['Formulario']);

      });
          }
    }
*/
