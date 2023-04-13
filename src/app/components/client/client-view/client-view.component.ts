import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../ClienteModel';
import { ClientService } from '../ClientService';

@Component({
  selector: 'app-view-cliente',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.css']
})
export class ClientViewComponent implements OnInit {

  cliente: Cliente

  constructor(private clienteService: ClientService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const cpf = this.route.snapshot.paramMap.get('cpf');
    this.clienteService.buscarClientePorCPF(cpf).subscribe(cliente => {
      this.cliente = cliente
    })
  }

  cancel(): void {
    this.router.navigate(['/clientes'])
  }

}
