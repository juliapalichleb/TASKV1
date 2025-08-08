


type ValidationError = {
  field: string;
  message: string;
};


export type ValidationResult =
  | { valid: true }
  | { valid: false; errors: ValidationError[] };


interface IValidator {
  validate(): ValidationResult;
}

// const useValidator<T>  = (validator: IValidator, data:<T> ) => {
//     return
// }
export { type IValidator, type ValidationError }