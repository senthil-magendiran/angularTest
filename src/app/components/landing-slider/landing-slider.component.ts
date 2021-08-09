import { Component, ViewEncapsulation } from '@angular/core';
import { ILandingProps } from '../../models/products.model';
import { ProductService } from '../../services/product-service.service';

import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay
} from 'swiper/core';

SwiperCore.use([Navigation, Pagination, Autoplay]);

@Component({
  selector: 'app-landing-slider',
  templateUrl: './landing-slider.component.html',
  styleUrls: ['./landing-slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LandingSliderComponent {
  autoPlayProps = {
    delay: 2500,
    disableOnInteraction: false
  }

  landingOffers: ILandingProps[] = this.productService.getLandingItems();
  
  constructor(private productService: ProductService) { }


}
