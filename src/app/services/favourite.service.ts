import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
  public likeSupport: number


  private sharedData = new Subject<number>();


  constructor() {
    this.likeSupport = 0
  }

  setSharedData(sharedData: number): void  {
    this.sharedData.next(sharedData)
  }

  receiveSharedData(): Observable<number> {
    return this.sharedData.asObservable();
  }



}
