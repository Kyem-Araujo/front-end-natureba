import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllProducts(): Observable<Produto[]> {
    return this.http.get<Produto[]>('http://localhost:8080/produto', this.token)
  }

  criarProdutoPorUsuario(produto: Produto, cpf: string): Observable<Produto> {
    return this.http.post<Produto>(`http://localhost:8080/usuario/produto/novo/${cpf}`, produto, this.token)
  }

  alterarProduto(produto: Produto, idProduto: number, cpf: string): Observable<Produto> {
    return this.http.put<Produto>(`http://localhost:8080/usuario/produto/${idProduto}/${cpf})`, produto, this.token)
  }

  deletarProduto(idProduto: number, cpf: string) {
    return this.http.delete<Produto>(`http://localhost:8080/usuario/produto/${idProduto}/${cpf}`, this.token)
  }

  favoritar( produto: Produto, idProduto: number, cpf: string) {
    return this.http.put<Produto>(`http://localhost:8080/usuario/produto/${idProduto}/${cpf}`, produto, this.token)
  }
}