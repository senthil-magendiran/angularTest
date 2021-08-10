import { Component, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { FavouriteService } from '../../services/favourite.service';

@Component({
  selector: 'app-sale-item',
  templateUrl: './sale-item.component.html',
  styleUrls: ['./sale-item.component.scss']
})
export class SaleItemComponent {

  @Input() productImage: string;
  @Input() productName: string;
  @Input() productCategory: string;
  @Input() saleAmount: string;
  @Input() rating: string;
  public favSelect: boolean = false
  public cartSelect: boolean = false

  stars = [1, 2, 3, 4, 5];

  constructor(
    public favservice: FavouriteService,
    public cartservice: CartService

  ) { }


  likeSupport() {

    this.favSelect = !this.favSelect
    if (this.favSelect) {
      this.favservice.likeSupport = this.favservice.likeSupport + 1
    } else {
      this.favservice.likeSupport = this.favservice.likeSupport - 1
    }
    this.favservice.setSharedData(this.favservice.likeSupport)
  }


  cartSupport() {
    this.cartSelect = !this.cartSelect
    if (this.cartSelect) {
      this.cartservice.cartSupport = this.cartservice.cartSupport + 1
    } else {
      this.cartservice.cartSupport = this.cartservice.cartSupport - 1
    }
    this.cartservice.setSharedData(this.cartservice.cartSupport)
  }
  public getStarRating(rating: number) {
    switch (rating) {
      case 1:
        this.rating = "one-star-rating";
        return 'one-star-rating';
      case 2:
        this.rating = "two-star-rating";
        return 'two-star-rating';
      case 3:
        this.rating = "three-star-rating";
        return 'three-star-rating';
      case 4:
        this.rating = "four-star-rating";
        return 'four-star-rating';
      case 5:
        this.rating = "five-star-rating";
        return 'five-star-rating';
      default:
        break;
    }
  }
}
