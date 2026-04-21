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
  styles: [`
    .product-grid { 
      display: flex; 
      gap: 20px; 
      padding: 20px; 
      flex-wrap: wrap;
    }
    .product-card { 
      border: 1px solid #ddd; 
      padding: 20px; 
      border-radius: 12px; 
      background: #f9f9f9;
      width: 200px;
      text-align: center;
      box-shadow: 2px 2px 10px rgba(0,0,0,0.05);
    }
    .price { font-weight: bold; color: #2c3e50; }
    button {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 10px 15px;
      border-radius: 5px;
      cursor: pointer;
      transition: background 0.3s;
    }
    button:hover:not(:disabled) { background-color: #0056b3; }
    button:disabled { background-color: #ccc; cursor: not-allowed; }
    .out-of-stock { background-color: #e74c3c !important; }
  `]
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