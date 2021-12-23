import { FormGroup } from '@angular/forms';
import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function ConfirmedValidator(
  controlName: string,
  matchingControlName: string
) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
      return;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ confirmedValidator: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}

export function PasswordValidator(
  controlName: string,
  matchingControlName: string
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const pwdControl = control.get(controlName)?.value;
    const matchingControl = control.get(matchingControlName)?.value;

    if (pwdControl === matchingControl) {
      control.get(matchingControlName)?.setErrors(null);
    } else {
      control.get(matchingControlName)?.setErrors({ not_the_same: true });
      return { not_the_same: true };
    }

    return null;
  };
}
