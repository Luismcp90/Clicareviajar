export class Questionario {
  Nome_Clientes: string;
  E_mail: string;
  Morada_Clientes: string;
  Localidade: string;
  Codigo_postal: number;
  Pais: string;
  Telefone: number;

  // tslint:disable-next-line: max-line-length
  constructor(Nome_Clientes: string,
    E_mail: string,
    Morada_Clientes: string,
    Localidade: string,
    Codigo_postal: number,
    Pais: string,
    Telefone: number
    ) {

    this.Nome_Clientes = Nome_Clientes;
    this.E_mail = E_mail;
    this.Morada_Clientes = Morada_Clientes;
    this.Localidade = Localidade;
    this.Codigo_postal = this.Codigo_postal;
    this.Pais = Pais;
    this.Telefone = Telefone;
  }

}
