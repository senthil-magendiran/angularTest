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
}
