import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component';
import { TestComponent } from './test/test.component';
import { FilterPipe } from './app-pipes/filter.pipe';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestfilterPipe } from './rest-pipes/restfilter.pipe';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { FoodiePageComponent } from './foodie-page/foodie-page.component';
import { CheckoutComponent } from './checkout/checkout.component';


export const routes: Routes = [
  {
    path: '',
    component: FoodiePageComponent,
  },
  {
    path: 'signin',
    component: SignInComponent,
  },
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: 'test',
    component: TestComponent,
  },
  {
    path: 'rest',
    component: RestaurantComponent,
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'orders',
    component: OrdersComponent
  },
  
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    FooterComponent,
    TestComponent,
    FilterPipe,
    RestaurantComponent,
    RestfilterPipe,
    CartComponent,
    OrdersComponent,
    FoodiePageComponent,
    CheckoutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
