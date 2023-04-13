import { CadastroEmprestimo } from './CadastroEmprestimoModel';

export interface Cliente {
    cpf: string;
    nome: string;
    telefone: string;
    rua: string;
    numero: number;
    cep: string;
    rendimentoMensal: number;
    emprestimos?: CadastroEmprestimo[];
}
