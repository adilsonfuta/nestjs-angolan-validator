import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@ValidatorConstraint({ name: 'AngolanIBAN', async: false })
export class AngolanIBANValidator implements ValidatorConstraintInterface {
  validate(iban: string): boolean {
    // Verifica se o valor é nulo, undefined ou não é string
    if (iban === null || iban === undefined || typeof iban !== 'string') {
      return false;
    }

    // Remove todos os caracteres não alfanuméricos (incluindo espaços e hífens)
    const cleaned = iban.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();

    // Verifica o formato básico: AO seguido de 21 dígitos
    return /^AO\d{21}$/.test(cleaned);
  }

  defaultMessage(): string {
    return 'IBAN angolano inválido. O formato deve ser "AO" seguido de 21 dígitos (total 23 caracteres)';
  }
}