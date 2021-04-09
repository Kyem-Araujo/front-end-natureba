import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-alterarcadastro',
  templateUrl: './alterarcadastro.component.html',
  styleUrls: ['./alterarcadastro.component.css']
})
export class AlterarcadastroComponent implements OnInit {

  usuario: Usuario = new Usuario
  confirmarSenha: string
  cpfUsuario: string

  constructor(private usuarioService: UsuarioService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    window.scroll(0,0)
    this.cpfUsuario = this.route.snapshot.params['id']
    this.findByCpf(this.cpfUsuario)
  }

  confirmSenha(event: any){
    this.confirmarSenha = event.target.value
  }

  alterarCadastro() {
    if(this.usuario.senhaUsuario != this.confirmarSenha){
      alert('As senhas não conferem.')
    }
    else{
      this.usuarioService.alterarCadastro(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        alert('Suas informações foram corrigidas! Faça o login novamente.')
        environment.token = ''
        environment.cpf = ''
        environment.contadorArvore = 0
        environment.emailUsuario = ''
        environment.nomeCompletoUsuario = ''
        environment.nomeSocial = ''
        environment.nomeUsuario= ''
        environment.senhaUsuario = ''
        this.router.navigate(['/paginaInicial'])
      })
    }
  }

  findByCpf(cpf: string) {
    this.usuarioService.getBycpf(this.cpfUsuario).subscribe((resp) => {
      this.usuario = resp
    })
  }
}