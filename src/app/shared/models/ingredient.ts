import { Category } from "./category";

export class Ingredient {
  quantity: number;

  constructor(
    public name: string,
    public category: Category,
    public productUid: string
  ) {}

}