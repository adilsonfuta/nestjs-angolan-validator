import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";

@ValidatorConstraint({ name: "AngolanIBANValidator", async: false })
export class AngolanIBANValidator implements ValidatorConstraintInterface {
  validate(iban: string): Promise<boolean> | boolean {
    if (!iban) return false;
    const cleanIban = iban.replace(/\s/g, "");
    const regex = /^AO\d{2}\d{19}$/;
    return regex.test(cleanIban) && this.verifyCheckDigits(cleanIban);
  }
  // criar validacao de digitos verificadores tipo AO06 ou removedores/Adicionandores
  private verifyCheckDigits(iban: string): boolean {
    return true;
  }
  defaultMessage(args?: ValidationArguments): string {
    return "IBAN angolano inválido. Formato esperado: AO06 XXXX XXXX XXXXXXXXXXX XX";
  }
}
