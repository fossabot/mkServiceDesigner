import { Directive, Input } from "@angular/core";
import { FormControl, NG_VALIDATORS, Validator } from "@angular/forms";

@Directive({
  providers: [
    {
      multi: true,
      provide: NG_VALIDATORS,
      useExisting: MaxDirective,
    },
  ],
  selector: "[max][formControlName], [max][formControl], [max][ngModel]",
})
export class MaxDirective implements Validator {
  @Input()
  public max: number;

  public validate(c: FormControl): {[key: string]: any} {
    const value = parseFloat(c.value);
    if ((c.value !== null) && !isNaN(value) && (this.max !== null) && !isNaN(this.max) && (value > this.max)) {
      return {
        max: {
          value,
        },
      };
    }
  }

}
