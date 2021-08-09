import { Component } from '@angular/core';
import { ILandingProps } from '../../models/products.model';
import { ProductService } from '../../services/product-service.service';

import SwiperCore, {
  Navigation,
} from 'swiper/core';

SwiperCore.use([Navigation]);

@Component({
  selector: 'app-trending-now-slider',
  templateUrl: './trending-now-slider.component.html',
  styleUrls: ['./trending-now-slider.component.scss']
})
export class TrendingNowSliderComponent {
  
  trendingItems: ILandingProps[] = this.productService.getTrendingItems();

  constructor(private productService: ProductService) {}
}
