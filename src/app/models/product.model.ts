export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number; // Crítico para el manejo de existencias
}

export interface CartItem extends Product {
  quantity: number; // Para saber cuántos lleva el usuario
}