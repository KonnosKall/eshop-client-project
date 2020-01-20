import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public prods: any = [];
  public search: string;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.http.get(environment.apiUrl + '/products/')
      .subscribe(response => {
        this.prods = response;
        console.log(this.prods = response);
      });
  }


}
