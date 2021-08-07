import { Component } from '@angular/core';
import { Iproducts } from './models/products.model';
import { ProductService } from './services/product-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  newArrivals: Iproducts[] = this.productService.getNewArrivals(); 
  recentItems: Iproducts[] = this.productService.getRecentlyViewed();
  similarItems: Iproducts[] = this.productService.getSimilarItems();
  
  constructor(private productService: ProductService) {

  }
}
