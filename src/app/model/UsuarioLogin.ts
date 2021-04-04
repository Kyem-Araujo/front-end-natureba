import { Produto } from "./Produto";

export class UsuarioLogin{
    public cpf: string;
    public nomeSocial: string;
    public nomeCompletoUsuario: string;
    public dataAniversario: string;
    public emailUsuario: string;
    public senhaUsuario: string;
    public contadorArvore: number;
    public token: string;
    public produtosUsuario: Produto[];
    public meusFavoritos: Produto[];
    public minhasCompras: Produto[];
}