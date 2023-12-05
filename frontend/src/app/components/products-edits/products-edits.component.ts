import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/interfaces/products';

@Component({
  selector: 'app-products-edits',
  templateUrl: './products-edits.component.html',
  styleUrls: ['./products-edits.component.css']
})
export class ProductsEditsComponent {
     form : FormGroup ;

     constructor(private fb: FormBuilder){
this.form = this.fb.group({
  name:['',Validators.required],
  description:['',Validators.required],
  price:['',Validators.required],
  stock:['',Validators.required]

})
     }


      addProduct(){
        //  console.log(this.form.value.name);
        //  console.log(this.form.get('name')?.value);

        const product: Product  = {
           name:this.form.value.name,
           description:this.form.value.description,
           price:this.form.value.price,
           stock:this.form.value.stock  
        }
        console.log(product)
      }
      
}
