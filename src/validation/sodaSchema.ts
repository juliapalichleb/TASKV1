import type {SodaDto} from "../types/Soda.ts";
import type {IValidator, ValidationError, ValidationResult} from "../hooks/useValidator.ts";

export class SodaValidator implements IValidator{
  private dto: SodaDto;
  private errors: ValidationError[] = [];

  constructor(dto: SodaDto) {
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
