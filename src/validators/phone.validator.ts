// src/validators/phone.validator.ts
import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@ValidatorConstraint({ name: 'AngolanPhoneValidator', async: false })
export class AngolanPhoneValidator implements ValidatorConstraintInterface {
  validate(phone: string): boolean {
    if (!phone || typeof phone !== 'string') return false;
    
    // Remove todos os caracteres não numéricos
    const cleaned = phone.replace(/\D/g, '');
    
    // Verifica os padrões aceitáveis:
    // 1. Números nacionais: 9 dígitos começando com 9
    if (/^9[1-9]\d{7}$/.test(cleaned)) return true;
    
    // 2. Números internacionais: prefixo 244 seguido de 9 dígitos começando com 9
    if (/^2449[1-9]\d{7}$/.test(cleaned)) return true;
    
    // 3. Números internacionais com 00244
    if (/^002449[1-9]\d{7}$/.test(cleaned)) return true;
    
    return false;
  }

  defaultMessage(): string {
    return 'Número de telefone angolano inválido. Formatos válidos: 9XXXXXXXX, 2449XXXXXXXX, 002449XXXXXXXX';
  }
}