import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { FavouriteService } from '../../services/favourite.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  likebadge: number
  cartbadge: number

  constructor(
    public favservice: FavouriteService,
    public cartservice: CartService
  ) {
  }

  ngOnInit(): void {
    this.favservice.receiveSharedData().subscribe((data) => {
      this.likebadge = data
    })

    this.cartservice.receiveSharedData().subscribe((data) => {
      this.cartbadge = data
    })
  }
}
