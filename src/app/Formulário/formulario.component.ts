import { Component, OnInit } from '@angular/core';
import { Questionário } from './reserva.model';
import { from } from 'rxjs';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  listaReservas: Array<Questionário> = [];

  Primeiro_nome: string;
  Apelido: string;
  Email: string;
  Endereco: string;
  Codigo_postal: string;
  País: string;
  Telefone: number;


  addFormulario() {
    // tslint:disable-next-line: max-line-length
    this.listaReservas.push(new Questionário(this.Primeiro_nome, this.Apelido, this.Email, this.Endereco, this.Codigo_postal, this.País, this.Telefone));
    console.log(this.listaReservas);
  }

  constructor() { }

  ngOnInit() {
  }

}
