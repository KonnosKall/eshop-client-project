import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public prods: any = {};
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {
  }
ngOnInit() {
    this.http.get('https://simple-api.develobird.gr/products')
      .subscribe(response => {
        this.prods = response;
        console.log(this.prods = response);
      });
  }


}
