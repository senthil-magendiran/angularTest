import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingNowSliderComponent } from './trending-now-slider.component';

describe('TrendingNowSliderComponent', () => {
  let component: TrendingNowSliderComponent;
  let fixture: ComponentFixture<TrendingNowSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingNowSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingNowSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
