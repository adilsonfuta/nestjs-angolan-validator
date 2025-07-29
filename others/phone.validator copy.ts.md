import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";

@ValidatorConstraint({ name: "AngolanPhoneValidator", async: false })
export class AngolanPhoneValidator implements ValidatorConstraintInterface {
  validate(phone: string): boolean {
    if (!phone || typeof phone !== "string") return false;

    // Remove todos os caracteres não numéricos exceto o '+' inicial
    const cleaned = phone.startsWith("+")
      ? "+" + phone.slice(1).replace(/\D/g, "")
      : phone.replace(/\D/g, "");

    // Valida números angolanos:
    // 1. Números internacionais: +244 ou 00244 seguido de 9 dígitos
    // 2. Números nacionais: 9 seguido de 8 dígitos
    const regex = /^(\+244|00244)?9[1-9]\d{7}$/;

    // Verifica se o número limpo corresponde ao padrão
    // E tem o comprimento correto (9 para nacional, 12/13 para internacional)
    return (
      regex.test(cleaned) &&
      (cleaned.length === 9 || // 912345678
        cleaned.length === 12 || // 244923456789
        cleaned.length === 13)
    ); // +244923456789
  }
  defaultMessage(): string {
    return "Número de telefone inválido. Exemplos válidos: +244 923000123";
  }
}
