import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { AlterarcadastroComponent } from './alterarcadastro/alterarcadastro.component';
import { AlterarprodutoComponent } from './alterarproduto/alterarproduto.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CardComponent } from './card/card.component';
import { CriarprodutoComponent } from './criarproduto/criarproduto.component';
import { ComoFuncionaComponent } from './como-funciona/como-funciona.component';
import { TelaUsuarioComponent } from './tela-usuario/tela-usuario.component';
import { TelaProdutosComponent } from './tela-produtos/tela-produtos.component';
import { TelaFavoritosComponent } from './tela-favoritos/tela-favoritos.component';
import { CorpoHomeComponent } from './corpo-home/corpo-home.component';
import { MinhasComprasComponent } from './minhas-compras/minhas-compras.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { NossoTimeComponent } from './nosso-time/nosso-time.component';
import { PopUpLoginComponent } from './pop-up-login/pop-up-login.component';
import { MenuLogadoComponent } from './menu-logado/menu-logado.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    AlterarcadastroComponent,
    AlterarprodutoComponent,
    CadastrarComponent,
    CardComponent,
    CriarprodutoComponent,
    ComoFuncionaComponent,
    TelaUsuarioComponent,
    TelaProdutosComponent,
    TelaFavoritosComponent,
    CorpoHomeComponent,
    MinhasComprasComponent,
    CategoriasComponent,
    NossoTimeComponent,
    PopUpLoginComponent,
    MenuLogadoComponent
 ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
