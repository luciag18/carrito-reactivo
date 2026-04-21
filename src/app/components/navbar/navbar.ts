// navbar.component.ts
import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav>
      <h1>Mi Tienda Tech</h1>
      <div class="cart-icon">
        Carrito: <span>{{ cartService.totalItems() }}</span>
      </div>
    </nav>
  `
})
export class NavbarComponent {
  cartService = inject(CartService); // Inyectamos el cerebro [cite: 145]
}