import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './article/article.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
 // se anotan los componentes que pertenecen a la familia
  declarations: [         
    // se anotan todos los modulos que necesito     
    // es recomedable que un modulo importe a otro 
    ArticleComponent,           
    ArticlesComponent,          
    HeaderComponent,
    FooterComponent,
    MenuComponent,
  ],
  imports: [
    // se usa para declarar componentes que seran usados posteriormente
    CommonModule,
    IonicModule
  ],
  exports: [                    
    ArticlesComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
  ]
})
export class ComponentsModule { }
