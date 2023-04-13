import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CadastroEmprestimo } from './CadastroEmprestimoModel';

@Injectable({
  providedIn: 'root'
})
export class CadastroEmprestimoService {
  private readonly baseUrl = 'http://localhost:8080/clientes';

  constructor(private http: HttpClient) { }

  adicionarEmprestimo(cpf: string, emprestimo: CadastroEmprestimo): Observable<CadastroEmprestimo> {
    return this.http.post<CadastroEmprestimo>(`${this.baseUrl}/${cpf}/emprestimos`, emprestimo);
  }

  buscarEmprestimo(cpf: string, id: number): Observable<CadastroEmprestimo> {
    return this.http.get<CadastroEmprestimo>(`${this.baseUrl}/${cpf}/emprestimos/${id}`);
  }

  listarEmprestimos(cpf: string): Observable<CadastroEmprestimo[]> {
    return this.http.get<CadastroEmprestimo[]>(`${this.baseUrl}/${cpf}/emprestimos`);
  }

  removerEmprestimo(cpf: string, id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${cpf}/emprestimos/${id}`);
  }
}
