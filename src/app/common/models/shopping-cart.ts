import { ShoppingCartItem } from "./shopping-cart-item";

export class ShoppingCart {
  items: ShoppingCartItem[] = [];

  constructor(
    public dateCreated?: Date,
    public itemsMap?: { [key: string]: ShoppingCartItem }
  ) {
    this.populateItems();
  }

  private populateItems() {
    for (let key in this.itemsMap) {
      this.items.push(
        new ShoppingCartItem(this.itemsMap[key].product, this.itemsMap[key].quantity)
      );
    }
  }

  get totalItemsCount() {
    return this.items.reduce((count, item) => {
      return count += item.quantity;
    }, 0);
    
  }

  get totalPrice() {
    return this.items.reduce((totalPrice, item) => {
      return totalPrice += item.totalPrice;
    }, 0);
  }
}