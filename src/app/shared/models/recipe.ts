import { Ingredient } from "shared/models/ingredient";

export class Recipe {
  datePublished: number;
  public title?: string;
  public imageUrl?: string;
  public category?: string;
  public description?: string;
  public directions?: string;
  public ingredients?: Ingredient[];
  public authorDisplayName?: string;
  public authorUid?: string;

  // consctructor(
  //   init?: Partial<Recipe>,
  //   authorDisplayName?: string,
  //   authorUid?: string)
  // {
  //   Object.assign(this, init);
  //   this.datePublished = new Date().getTime();
  //   this.authorDisplayName = authorDisplayName || '';
  //   this.authorUid = authorUid || '';
  // }
  constructor(
    init?: Partial<Recipe>,
    authorDisplayName?: string,
    authorUid?: string
  ) { 
    this.ingredients = [];
    Object.assign(this, init);
    this.datePublished = new Date().getTime();
    this.authorDisplayName = authorDisplayName || '';
    this.authorUid = authorUid || '';

  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}