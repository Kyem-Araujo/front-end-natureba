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

  criarProdutoPorUsuario(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>('http://localhost:8080/produto', produto, this.token)
  }
}