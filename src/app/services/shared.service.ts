import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public num: number = 0;
  public inp: string = '';

  constructor() {
  }

  public increaseNumber() {
    this.num++;
  }

  public decreaseNumber() {
    this.num--;
  }
}
