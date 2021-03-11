import { OrderItem } from "./order-item";
import { ShippingAddress } from "./shipping-address";
import { ShoppingCartItem } from "./shopping-cart-item";

export class Order {
  items: OrderItem[];
  datePlaced: number;

  constructor(
    public userId: string,
    public shippingAddress: ShippingAddress,
    shoppingCartItems: ShoppingCartItem[]
  ) {
    this.datePlaced = new Date().getTime();
    this.setItems(shoppingCartItems);
  }

  setItems(items: ShoppingCartItem[]) {
    this.items = items.map((item: ShoppingCartItem) => new OrderItem(item));
  }
}