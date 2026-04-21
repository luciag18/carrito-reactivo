import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { ProductListComponent } from './components/product-list/product-list';
import { CheckoutComponent } from './components/checkout/checkout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, ProductListComponent, CheckoutComponent],
  template: `
   <div class="main-box">
      
      <app-navbar></app-navbar>
      
      <main style="display: flex; gap: 30px; margin-top: 20px; align-items: flex-start; flex-wrap: wrap;">
        <app-product-list style="flex: 2;"></app-product-list>
        <app-checkout style="flex: 1;"></app-checkout>
      </main>
    </div>
  `
})
export class AppComponent {}