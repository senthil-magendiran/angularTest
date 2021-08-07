import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subheading',
  templateUrl: './subheading.component.html',
  styleUrls: ['./subheading.component.scss']
})
export class SubheadingComponent implements OnInit {

  @Input() sliderTitle: string;

  constructor() { }

  ngOnInit(): void {
  }

}
