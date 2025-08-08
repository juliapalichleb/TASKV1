import type {IValidator, ValidationError, ValidationResult} from "../hooks/useValidator.ts";
import type {ShoeDto} from "../types/Shoe.ts";

export class ShoeValidator implements IValidator{
  private dto: ShoeDto;
  private errors: ValidationError[] = [];

  constructor(dto: ShoeDto) {
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

    return this.errors.length === 0
      ? { valid: true }
      : { valid: false, errors: this.errors };
  }
}
