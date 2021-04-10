import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  produto: Produto = new Produto

  categoria: Categoria = new Categoria()
  listaProdutos: Produto[]
  contadorArvore = environment.contadorArvore
  variavel: number

  usuario: Usuario = new Usuario()
  idUsuario = environment.cpf

  key = 'data'
  reverse = true

  pesquisa: string
  

  constructor(private produtoService: ProdutoService, 
    private categoriaService: CategoriaService, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    window.scroll(0,0)
    let id = this.route.snapshot.params['id']
    this.variavel = this.route.snapshot.params['id']
    this.findByIdCategoria(this.variavel)
  }

  findByIdProduto(idProduto: number) {
    this.produtoService.getByIdProduto(idProduto).subscribe((resp: Produto) => {
      this.produto = resp
    })
  }

  findByIdCategoria(idCategoria: number) {
    this.categoriaService.getByIdCategoria(idCategoria).subscribe((resp: Categoria) => {
      this.categoria
    })
  }
}
