import { Product } from "./product";
import { ShoppingCartItem } from "./shopping-cart-item";

export class OrderItem {
  title: string;
  imageUrl: string;
  price: number;
  quantity: number;
  totalPrice: number;

  constructor(cartItem: ShoppingCartItem) {
    this.title = cartItem.product.title;
    this.imageUrl = cartItem.product.imageUrl,
    this.price = cartItem.product.price;
    this.quantity = cartItem.quantity,
    this.totalPrice = cartItem.totalPrice;
  }
}