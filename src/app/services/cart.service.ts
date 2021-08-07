import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartSupport: number


  private sharedData = new Subject<number>();


  constructor() {
    this.cartSupport = 0
  }

  setSharedData(sharedData:number) :void {
    this.sharedData.next(sharedData)
  }

  receiveSharedData(): Observable<number> {
    return this.sharedData.asObservable();
  }



}
