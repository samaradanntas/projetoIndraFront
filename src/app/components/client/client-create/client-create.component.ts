import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../ClienteModel';
import { ClientService } from '../ClientService';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

  cliente: Cliente = {
    cpf: '',
    nome: '',
    telefone: '',
    rua: '',
    numero: 0,
    cep: '',
    rendimentoMensal: 0
  }

  constructor(private clienteService: ClientService, private router: Router) { }

  ngOnInit(): void {
  }

  createCliente(): void {
    console.log(this.cliente);
    this.clienteService.adicionarCliente(this.cliente).subscribe(() => {
      this.clienteService.showMessage('Cliente cadastrado com sucesso!');
      this.router.navigate(['/clientes']);
    })
  }

  cancel(): void {
    this.router.navigate(['/clientes']);
  }

}
