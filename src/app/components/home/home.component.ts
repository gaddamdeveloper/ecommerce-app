import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
products:any;
  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
    this.findAllProducts();
  }
  private findAllProducts(){
    this.productService.getAllProducts().subscribe(
      (response:any)=>{
        this.products=response;
      console.log(response)
      },(error)=>{
        console.log(error)
      }
    )
  }

}
