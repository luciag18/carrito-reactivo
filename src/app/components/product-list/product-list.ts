import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { CartService } from '../../services/cart';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule], 
  template: `
    <section>
     <h2>Catálogo de Productos</h2>
     
     <div class="product-grid">
        @for (product of products; track product.id) {
          <div class="product-card">
            <h3>{{ product.name }}</h3>
            <p class="price">Precio: $ {{ product.price }}</p>
            <p>Stock disponible: {{ product.stock }}</p>
            
            <button 
              (click)="cartService.addToCart(product)"
              [disabled]="product.stock === 0"
              [class.out-of-stock]="product.stock === 0">
              {{ product.stock > 0 ? 'Agregar al carrito' : 'Sin Stock' }}
            </button>
          </div>
        }
      </div>
    </section>
  `,
  styleUrl: './product-list.css'
})
export class ProductListComponent {

  cartService = inject(CartService);


  products: Product[] = [
    { id: 1, name: 'Teclado Mecánico', price: 5000, stock: 5 },
    { id: 2, name: 'Mouse Gamer', price: 3000, stock: 10 },
    { id: 3, name: 'Monitor 24"', price: 15000, stock: 2 },
    { id: 4, name: 'Auriculares Pro', price: 8000, stock: 0 } // Uno sin stock para probar
  ];
}