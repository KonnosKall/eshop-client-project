import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shoeShop';

  constructor(
    private ls: LocalStorageService
  ) {
  }

  ngOnInit() {
    const cart = this.ls.retrieve('cart');
    if (cart == null) {
      this.ls.store('cart', []);
    }
  }
}
