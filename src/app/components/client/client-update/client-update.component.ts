import { Router, ActivatedRoute } from '@angular/router';
import { ClientService } from '../ClientService';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../ClienteModel';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit {

  cliente: Cliente = {
    cpf: '',
    nome: '',
    telefone: '',
    rua: '',
    numero: 0,
    cep: '',
    rendimentoMensal: 0
  }

  constructor(
      private clienteService: ClientService,
      private router: Router,
      private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const cpf = this.route.snapshot.paramMap.get('cpf')
    this.clienteService.buscarClientePorCPF(cpf).subscribe(cliente => {
      this.cliente = cliente
    })
  }

  updateCliente(): void {
    this.clienteService.atualizarClientePorCPF(this.cliente.cpf, this.cliente).subscribe(() => {
      this.clienteService.showMessage('Cliente atualizado com sucesso')
      this.router.navigate(['/clientes']);
    });
  }

  cancel(): void {
    this.router.navigate(['/clientes'])
  }
}
