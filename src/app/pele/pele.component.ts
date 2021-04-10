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
export class PeleComponent implements OnInit {

  produto: Produto = new Produto

  categoria: Categoria = new Categoria()
  listaProdutos: Produto[]
  contadorArvore = environment.contadorArvore
  idCategoria: number = 4

  usuario: Usuario = new Usuario()
  idUsuario = environment.cpf

  key = 'data'
  reverse = true

  pesquisa: string
  

  constructor(private produtoService: ProdutoService, 
    private categoriaService: CategoriaService, 
    ) { }

  ngOnInit() {
    window.scroll(0,0)
    this.findByIdCategoria(this.idCategoria)
  }

  findByIdProduto(idProduto: number) {
    this.produtoService.getByIdProduto(idProduto).subscribe((resp: Produto) => {
      this.produto = resp
    })
  }

  findByIdCategoria(id: number) {
    this.categoriaService.getByIdCategoria(id).subscribe((resp: Categoria) => {
      this.categoria = resp
    })
  }
}
