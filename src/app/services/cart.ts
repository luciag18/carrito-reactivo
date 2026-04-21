import { Injectable, signal, computed, effect } from '@angular/core';
import { Product, CartItem } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  // 1. El Origen (Signal Escribible)
  private _cartItems = signal<CartItem[]>([]);
  public cartItems = this._cartItems.asReadonly();

  // 2. La Transformación (Signals Computados)
  public totalItems = computed(() => 
    this._cartItems().reduce((acc, item) => acc + item.quantity, 0)
  );

  public totalPrice = computed(() => 
    this._cartItems().reduce((acc, item) => acc + (item.price * item.quantity), 0)
  );

  constructor() {
    // 3. La Reacción (Efecto para persistencia)
    effect(() => {
      localStorage.setItem('cart_session', JSON.stringify(this._cartItems()));
      console.log('Carrito guardado automáticamente');
    });
  }

  addToCart(product: Product) {
    this._cartItems.update(items => {
      const existing = items.find(i => i.id === product.id);
      if (existing) {
        return items.map(i => i.id === product.id ? {...i, quantity: i.quantity + 1} : i);
      }
      return [...items, { ...product, quantity: 1 }];
    });
  }
}