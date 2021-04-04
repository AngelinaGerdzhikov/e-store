import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { Ingredient } from "shared/models/ingredient";
import { UrlValidatorDirective } from "shared/validators/url.validator";

export class RecipeFormCreator {
  static createForm() {
    return new FormGroup({
      'title': new FormControl( null, [ Validators.required ]),
      'imageUrl': new FormControl(
        null,
        [ Validators.required, new UrlValidatorDirective().validate ]
      ),
      'category': new FormControl( null, Validators.required),
      'description': new FormControl( null, 
        [ Validators.required, Validators.minLength(40) ]
      ),
      'directions': new FormControl( null, 
        [ Validators.required, Validators.minLength(40) ]
      ),
      'ingredients': new FormArray([], Validators.required)
    });
  }

  static createIngredientControl(ingredientData?: Ingredient): FormGroup {
    return new FormGroup({
      'name': new FormControl(ingredientData ? ingredientData.name : null),
      'productUid': new FormControl(ingredientData ? ingredientData.productUid : null),
      'category': new FormControl(ingredientData ? ingredientData.category : null),
      'key': new FormControl(ingredientData ? ingredientData['key'] : null),
      'quantity': new FormControl(ingredientData ? ingredientData.quantity : null, [ Validators.required, Validators.min(1) ])
    });
  }

  static createIngredientsControlArray(ingredientsData, ingredientFormArray) {
    if (ingredientsData.length > 0) {
      ingredientsData.forEach(ingredientData => {
        ingredientFormArray.push(this.createIngredientControl(ingredientData));
      })
    }
  }
}
