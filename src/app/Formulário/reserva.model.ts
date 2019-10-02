export class Questionário {
  Primeiro_nome: string;
  Apelido: string;
  Email: string;
  Endereco: string;
  Codigo_postal: string
  País: string;
  Telefone: number

  // tslint:disable-next-line: max-line-length
  constructor(Primeiro_nome: string, Apelido: string, Email: string, Endereco: string, Codigo_postal: string, País: string, Telefone: number) {

    this.Primeiro_nome = Primeiro_nome;
    this.Apelido = Apelido;
    this.Email = Email;
    this.Endereco = Endereco;
    this.Codigo_postal = this.Codigo_postal;
    this.País = País;
    this.Telefone = Telefone;
  }

}
