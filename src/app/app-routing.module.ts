import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { CardComponent } from "./card/card.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { HeaderComponent } from "./header/header.component";
const routes: Routes = [
  {
    path:'descripcion/:id',
    component:DescripcionComponent
  },
  {
    path:'card',
    component:CardComponent
  },
  {
    path:'carousel',
    component:CarouselComponent
  },
  {
    path:'header',
    component:HeaderComponent
  },
  {
    path:'',
    redirectTo:'card',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
