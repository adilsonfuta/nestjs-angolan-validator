import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";

@ValidatorConstraint({ name: "AngolanPhoneValidator", async: false })
export class AngolanPhoneValidator implements ValidatorConstraintInterface {
  validate(phone: string): Promise<boolean> | boolean {
    const cleaned = phone.replace(/\D/g, "");
    // Valida números angolanos:
    // - Começa com 244, 00244 ou +244 seguido de 9 dígitos
    // - Ou começa com 9 seguido de 8 dígitos
    const regex = /^((\+|00)?244)?[9][1-9]\d{7}$/;
    return regex.test(cleaned);
  }
  defaultMessage(): string {
    return "Número de telefone inválido. Exemplos válidos: +244 923000123";
  }
}
