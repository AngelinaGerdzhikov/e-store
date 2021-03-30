import { Category } from "./category";

export class Ingredient {
  quantity: number;
  name: string;
  category: Category;
  productUid: string
  type: string;

  constructor(init?: Partial<Ingredient>) {
    Object.assign(this, init);
    this.type = 'Ingredient';
  }

}