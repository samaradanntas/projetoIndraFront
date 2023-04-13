export interface CadastroEmprestimo {
    id?: number;
    valorInicial: number;
    valorFinal?: number;
    relacionamento: string;
    dataInicial: Date;
    dataFinal: Date;
}
