import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Component({
  selector: 'app-menu-logado',
  templateUrl: './menu-logado.component.html',
  styleUrls: ['./menu-logado.component.css']
})
export class MenuLogadoComponent implements OnInit {

  nomeUsuario = environment.nomeUsuario
  usuarioLogin: UsuarioLogin = new UsuarioLogin()
  maquiagem: number = 1
  cabelo: number = 2
  cheirinho: number = 3
  peleMacia: number = 4
  cuide: number = 5

  constructor(private router: Router) { }
  

  ngOnInit(): void {
  }

  sair() {
    this.router.navigate(['/paginaInicial'])
    environment.token = ''
    environment.cpf = ''
    environment.emailUsuario = ''
    environment.nomeCompletoUsuario = ''
    environment.nomeSocial = ''
    environment.nomeUsuario = ''
    environment.senhaUsuario = ''
  }
}
