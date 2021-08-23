import { AbstractControl } from '@angular/forms';
/**
 * returning function that returns validation function for abstract controls.
 * Compares values in text inputs
 * Checks if they should be equal or should not
 * Sets error for fields && returns error for entire form
 */
export const compareFieldsEqual =
  (fields: Array<string>, mustBeEqual = true) =>
  (ac: AbstractControl) => {
    const valuesMap: Map<string, { value: string; control: AbstractControl }> = new Map<string, any>();
    for (const field of fields) {
      const innerControl: AbstractControl = ac.get(field);
      const fieldValue = ac.get(field).value;
      if (!fieldValue) {
        return null;
      }
      valuesMap.set(field, { value: fieldValue, control: innerControl });
    }
    let result;
    let error = null;
    if (mustBeEqual) {
      result = Array.from(valuesMap.values()).reduce((previous, current): any =>
        previous.value === current.value ? previous : { fieldsNotEqual: true }
      );
      if (result.fieldsNotEqual) {
        error = { fieldsNotEqual: true };
      }
    } else {
      result = Array.from(valuesMap.values()).reduce((previous, current): any =>
        previous.value !== current.value ? previous : { fieldsMustNotBeEqual: true }
      );
      if (result.fieldsMustNotBeEqual) {
        error = { fieldsMustNotBeEqual: true };
      }
    }
    if (error) {
      Array.from(valuesMap.values()).forEach((innerAbstractControl) => {
        const currentErrors = innerAbstractControl.control.errors;
        const resultErrors = { ...currentErrors, ...{ incorrect: true } };
        innerAbstractControl.control.setErrors(resultErrors);
      });
      return error;
    } else {
      Array.from(valuesMap.values()).forEach((innerAbstractControl) => {
        const currentErrors = innerAbstractControl.control.errors;
        if (currentErrors) {
          delete currentErrors.incorrect;
          const resultErrors = currentErrors && Object.values(currentErrors).length > 0 ? { ...currentErrors } : null;
          innerAbstractControl.control.setErrors(resultErrors);
        } else {
          innerAbstractControl.control.setErrors(null);
        }
      });
      return null;
    }
  };
