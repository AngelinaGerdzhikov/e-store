export class Product {
  title: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  key?: string;

  constructor(init?: Partial<Product>) {
    Object.assign(this, init);
  }
}