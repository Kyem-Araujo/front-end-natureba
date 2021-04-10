import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllProducts(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>('http://localhost:8080/produto', this.token)
  }

  getBycpf(cpf: string): Observable<Usuario> {
    return this.http.get<Usuario>(`http://localhost:8080/${cpf}`, this.token)
  }

  getByNomeUsuario(nomeUsuario: string): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`http://localhost:8080/nomeUsuario/${nomeUsuario}`, this.token)
  }

  getByNomeSocial(nomeSocial: string): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`http://localhost:8080/nomeSocial/${nomeSocial}`, this.token)
  }

  getByNomeCompletoUsuario(nomeCompletoUsuario: string): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`http://localhost:8080/nomeCompletoUsuario/${nomeCompletoUsuario}`, this.token)
  }

  getByEmailUsuario(emailUsuario: string): Observable<Usuario> {
    return this.http.get<Usuario>(`http://localhost:8080/emailUsuario/${emailUsuario}`, this.token)
  }

  alterarCadastro(usuario: Usuario) {
    return this.http.put<Usuario>('http://localhost:8080/usuario', usuario)
  }

}
