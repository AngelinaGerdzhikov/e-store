import { Ingredient } from "./ingredient";

export class Recipe {

  constructor(
    public title: string,
    public description: string,
    public imageUrl: string,
    public ingredients: Ingredient[],
    public authorDisplayName: string,
    public authorUid: string
  ) {  }
}