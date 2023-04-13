import { Component, OnInit } from '@angular/core';
import { Cliente } from '../ClienteModel';
import { ClientService } from '../ClientService';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-list-clientes',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clientes: Cliente[];
  displayedColumns = ['cpf', 'nome', 'telefone', 'rendimentoMensal', 'actions'];

  constructor(
      private clienteService: ClientService,
      private router: Router,
      private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.buscarClientes();
  }

  buscarClientes(): void {
    this.clienteService.buscarTodosClientes().subscribe(clientes => {
      this.clientes = clientes;
    });
  }

  deleteCliente(cpf): void {
    this.clienteService.deletarClientePorCPF(cpf).subscribe(() => {
      this.clienteService.showMessage('Cliente excluído com sucesso');
      this.buscarClientes();
    })
  }

}
