import { Injectable, ɵgetDebugNode__POST_R3__ } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {from} from 'rxjs'
import { Questionario } from './Formulário/reserva.model';


@Injectable({
  providedIn: 'root'
})
export class FormsService {
clientesURL = 'http://localhost:5000/api/clientes';
reservasURL = 'http://localhost:5000/api/reservas';

  constructor(private http:HttpClient) { }
  getReservas(){
    return this.http.get<any[]>(this.reservasURL);
  }
createClientes(clientes: Questionario){
  return this.http.post(this.clientesURL, clientes);
}

}
