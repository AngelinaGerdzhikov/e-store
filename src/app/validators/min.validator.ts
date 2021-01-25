import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, Validator, Validators } from "@angular/forms";

@Directive({
  selector: '[min]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MinValidatorDirective, multi: true }]
})
export class MinValidatorDirective implements Validator {
  @Input() min: number;

  validate(control: AbstractControl): { [key: string]: any } {
    // return control.value < this.min ? { min:{ invalid: true, actual: control.value }} : null;
    return Validators.min(this.min)(control);
  }
  
}