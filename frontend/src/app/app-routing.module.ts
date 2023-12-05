import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//components
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ProductsEditsComponent } from './components/products-edits/products-edits.component';

const routes: Routes = [
   {path: '', component: ListProductsComponent},
   {path: 'agregar' , component:ProductsEditsComponent},
   {path: 'edit/:id' , component: ProductsEditsComponent},
   {path: '""' , redirectTo: '' , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
