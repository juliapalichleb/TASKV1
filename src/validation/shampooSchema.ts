import type {IValidator, ValidationError, ValidationResult} from "../hooks/useValidator.ts";
import type {ShampooDto} from "../types/Shampoo.ts";

export class ShampooValidator implements IValidator{
  private dto: ShampooDto;
  private errors: ValidationError[] = [];

  constructor(dto: ShampooDto) {
    this.dto = dto;
  }

  validate(): ValidationResult {
    this.errors = [];

    if (!this.dto.name || this.dto.name.trim().length === 0) {
      this.errors.push({ field: "name", message: "Name is required" });
    }

    if (!this.dto.price || this.dto.price.trim().length === 0) {
      this.errors.push({ field: "price", message: "Price is required" });
    }

     if (!this.dto.bottleSize || this.dto.bottleSize.trim().length === 0) {
      this.errors.push({ field: "bottleSize", message: "Bottle size is required" });
    }

    return this.errors.length === 0
      ? { valid: true }
      : { valid: false, errors: this.errors };
  }
}
