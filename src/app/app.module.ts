import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {ProductsComponent} from './components/products/products.component';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ProductComponent} from './components/product/product.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import {AgmCoreModule} from '@agm/core';
import {FilterPipeModule} from 'ngx-filter-pipe';
import {FormsModule} from '@angular/forms';
import {BoxComponent} from './components/box/box.component';
import {BoxesComponent} from './components/boxes/boxes.component';
import {NgxWebstorageModule} from 'ngx-webstorage';
import {CartComponent} from './components/cart/cart.component';

const routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'products/:productId',
    component: ProductComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'boxes',
    component: BoxesComponent
  },
  {
    path: 'cart',
    component: CartComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductComponent,
    HeaderComponent,
    FooterComponent,
    BoxComponent,
    BoxesComponent,
    CartComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FilterPipeModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    FormsModule,
    NgxWebstorageModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
