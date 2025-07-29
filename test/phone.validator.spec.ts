// test/phone.validator.spec.ts
import { AngolanPhoneValidator } from '../src/validators/phone.validator';

describe('AngolanPhoneValidator', () => {
  const validator = new AngolanPhoneValidator();

  describe('Números válidos', () => {
    const validNumbers = [
      '912345678',       // Formato nacional
      '923456789',       // Formato nacional
      '244912345678',    // Formato internacional
      '00244912345678',  // Formato internacional
      '+244912345678',   // Formato internacional
      '912 345 678',     // Com espaços
      '912-345-678'      // Com hífens
    ];

    test.each(validNumbers)('deve aceitar %s', (number) => {
      expect(validator.validate(number)).toBe(true);
    });
  });

  describe('Números inválidos', () => {
    const invalidNumbers = [
      '812345678',       // Operadora inválida
      '91234567',        // Muito curto
      '9123456789',      // Muito longo
      '244812345678',    // Operadora internacional inválida
      '00244123456789',  // Operadora internacional inválida
      'nine one two',    // Letras
      '',                // Vazio
      'null',              // Null
      'undefined'         // Undefined
     // 912345678          // Tipo número
    ];

    test.each(invalidNumbers)('deve rejeitar %s', (number) => {
      expect(validator.validate(number)).toBe(false);
    });
  });
});