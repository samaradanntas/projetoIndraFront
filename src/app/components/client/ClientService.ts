import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './ClienteModel';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private readonly baseUrl = 'http://localhost:8080/clientes';

  constructor(private http: HttpClient) { }

  buscarTodosClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.baseUrl}`);
  }

  buscarClientePorCPF(cpf: string): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.baseUrl}/${cpf}`);
  }

  adicionarCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.baseUrl}`, cliente);
  }

  atualizarClientePorCPF(cpf: string, cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.baseUrl}/${cpf}`, cliente);
  }

  showMessage(msg: string): void {
    console.log(msg);
  }

  deletarClientePorCPF(cpf: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${cpf}`);
  }

}
