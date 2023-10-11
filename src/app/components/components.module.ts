import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './article/article.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [               // se anotan los componentes que pertenecen a la familia
    ArticleComponent,           // se anotan todos los modulos que necesito
    ArticlesComponent,          // es recomedable que un modulo importe a otro
    HeaderComponent,
    FooterComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [                    // se usa para declarar componentes que seran usados posteriormente
    ArticlesComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
  ]
})
export class ComponentsModule { }
