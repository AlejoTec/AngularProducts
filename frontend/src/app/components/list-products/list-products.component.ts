import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/products';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {

listProduct: Product[] =  [
  {id: 1,name: 'Aceite' , description: 'para todos nuestros vehiculos' , price: 700000 , stock:5  },
  {id: 2,name: 'Pinsas de Bateria' , description: 'recarga recursiva para vehiculos' , price: 3000000 , stock:3 },
]




}
