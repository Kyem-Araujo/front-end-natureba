import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin()
  maquiagem: number = 1
  cabelo: number = 2
  cheirinho: number = 3
  peleMacia: number = 4
  cuide: number = 5

  constructor(private authService: AuthService,
     private router: Router,
     private alertas: AlertasService) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  pesquisar() {

  }
  
  entrar() {
    this.authService.entrar(this.usuarioLogin).subscribe((resp: UsuarioLogin) => {
      this.usuarioLogin = resp

      environment.cpf = this.usuarioLogin.cpf
      environment.emailUsuario = this.usuarioLogin.emailUsuario
      environment.nomeSocial = this.usuarioLogin.nomeSocial
      environment.nomeCompletoUsuario = this.usuarioLogin.nomeCompletoUsuario
      environment.nomeUsuario = this.usuarioLogin.nomeUsuario
      environment.token = this.usuarioLogin.token
      environment.contadorArvore = this.usuarioLogin.contadorArvore
      environment.senhaUsuario = this.usuarioLogin.senhaUsuario

      

      this.router.navigate(['/paginaInicial'])
    }, erro=> {
      if(erro.status == 500){
        this.alertas.showAlertInfo('Usuário ou senha estão incorretos!')
      }
    })
  }
}
