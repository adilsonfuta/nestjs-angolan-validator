import { AngolanPhoneValidator } from '../src/validators/phone.validator';

describe('AngolanPhoneValidator', () => {
  const validator = new AngolanPhoneValidator();

  // Casos válidos
  const validNumbers = [
    '912345678',       // Formato nacional
    '923456789',       // Formato nacional
    '244923456789',    // Formato internacional com prefixo 244
    '00244923456789',  // Formato internacional com 00244
    '+244923456789'    // Formato internacional com +244
  ];

  // Casos inválidos
  const invalidNumbers = [
    '912-345-678',     // Hífens não permitidos
    '912 345 678',     // Espaços não permitidos
    'nine one two',    // Letras não permitidas
    '812345678',       // Operadora inválida (8)
    '91234567',        // Muito curto (8 dígitos)
    '9123456789',      // Muito longo (10 dígitos)
    '244812345678',    // Operadora internacional inválida
    '00244123456789',  // Operadora internacional inválida
    '+244812345678',   // Operadora internacional inválida
    '',                // Vazio
    'null',              // Null
    'undefined',         // Undefined
    '912345678'          // Número (deve ser string)
  ];

  it('should validate correct phone numbers', () => {
    validNumbers.forEach(number => {
      expect(validator.validate(number)).toBe(true);
    });
  });

  it('should reject invalid phone numbers', () => {
    invalidNumbers.forEach(number => {
      expect(validator.validate(number)).toBe(false);
    });
  });
});



/* it('should reject invalid phone numbers', () => {
    expect(validator.validate('91234567')).toBe(false); // Muito curto
    expect(validator.validate('+2449123456789')).toBe(false); // Muito longo
    expect(validator.validate('+244812345678')).toBe(false); // Operadora inválida
  });
  */