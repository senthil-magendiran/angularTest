import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { LandingSliderComponent } from './components/landing-slider/landing-slider.component';
import { SwiperModule } from 'swiper/angular';
import { SaleItemComponent } from './components/sale-item/sale-item.component';
import { CommonSliderComponent } from './components/common-slider/common-slider.component';
import { TrendingNowSliderComponent } from './components/trending-now-slider/trending-now-slider.component';
import { SubheadingComponent } from './components/subheading/subheading.component';
import { ProductService } from './services/product-service.service';

import { FooterComponent } from './components/footer/footer.component';
import { FavouriteService } from './services/favourite.service';
import { CartService } from './services/cart.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingSliderComponent,
    SaleItemComponent,
    CommonSliderComponent,
    TrendingNowSliderComponent,
    SubheadingComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatBadgeModule,
    SwiperModule
  ],
  providers: [
    FavouriteService,
    CartService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
