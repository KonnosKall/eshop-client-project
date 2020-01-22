import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LocalStorageService} from 'ngx-webstorage';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public products: any [] = [];

  constructor(
    private http: HttpClient,
    private ls: LocalStorageService
  ) {
  }

  ngOnInit() {
    const cart = this.ls.retrieve('cart');
    if (cart && cart.length > 0) {
      this.getCartProducts(cart);
    }
  }

  public getCartProducts(productIds: string[]) {
    this.http.post<any[]>(environment.apiUrl + '/products/cart', {productIds})
      .subscribe(products => {
        this.products = products;
      });
  }

  public printGrandTotal() {
    let total = 0;
    this.products.forEach(product => {
      total = total + (product.price * 1);
    });
    return total;
  }
}
