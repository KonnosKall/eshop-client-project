import {Component, OnInit} from '@angular/core';
import {LocalStorage} from 'ngx-webstorage';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @LocalStorage('cart')
  public cart;

  constructor() {
  }

  ngOnInit() {
    // this.ls.observe('cart')
    //   .subscribe(cart => {
    //     this.cart = cart.length;
    //   });

  }

}
