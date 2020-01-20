import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {LocalStorage} from 'ngx-webstorage';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public product: any = {};

  @LocalStorage('cart')
  public cart;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {

      this.http.get(environment.apiUrl + '/products/' + params.productId)
        .subscribe(response => {
          this.product = response;
          console.log(this.product = response);
        });

    });

  }

  public addToCart(id: string) {
    if (!this.cart.includes(id)) {
      this.cart.push(id);
      this.cart = this.cart;
    }
  }

}
