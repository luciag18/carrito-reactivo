import { Component, inject, computed } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CurrencyPipe],
  template: `
    <div class="checkout-container">
      <h3>Resumen de Compra</h3>
      @if (cartService.totalItems() > 0) {
        <div class="details">
          <p><span>Productos: </span> <span>{{ cartService.totalItems() }}</span></p>
          <p><span>Subtotal: </span> <span>{{ cartService.totalPrice() | currency:'ARS':'symbol':'1.0-0' }}</span></p>
          <p><span>IVA (21%): </span> <span>{{ tax() | currency:'ARS':'symbol':'1.0-0' }}</span></p>
          <hr>
          <div class="total">
            <span>Total:</span>
            <span>{{ totalWithTax() | currency:'ARS':'symbol':'1.0-0' }}</span>
          </div>
          <button class="btn-confirm">Confirmar Pedido</button>
        </div>
      } @else {
        <p class="empty-msg">El carrito está vacío</p>
      }
    </div>
  `,
  styleUrl: './checkout.css' // <-- ESTA LÍNEA ES LA QUE ACTIVA TU ARCHIVO CSS
})
export class CheckoutComponent {
  cartService = inject(CartService);
  tax = computed(() => this.cartService.totalPrice() * 0.21);
  totalWithTax = computed(() => this.cartService.totalPrice() + this.tax());
}