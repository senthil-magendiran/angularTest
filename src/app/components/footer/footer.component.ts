import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public categoryList: string[]
  public collectionsList: string[]
  public AboutList: string[]
  public terms: string[]

  constructor() {

    this.categoryList = ["MEN", "WOMEN", "BABY & KIDS", "HOME FASHION", "OFFERS"];
    this.collectionsList = ["Sarees", "Dhotis", "Kurits", "Salwar & Churidhars", "Jeans", "Formal Shirts", "Bags", "Belts"]
    this.AboutList = ["ABOUT", "CONTACT US"]
    this.terms = ["Terms & Conditons", "Privacy Policy", "Company Polices"]
  }



}
