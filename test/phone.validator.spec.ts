// test/phone.validator.spec.ts
import { AngolanPhoneValidator } from '../src/validators/phone.validator';

describe('AngolanPhoneValidator', () => {
  const validator = new AngolanPhoneValidator();

  it('should validate correct phone numbers', () => {
    expect(validator.validate('+244 912 345 678')).toBe(true);
    expect(validator.validate('244923456789')).toBe(true);
    expect(validator.validate('00244912345678')).toBe(true);
  });

  it('should reject invalid phone numbers', () => {
    expect(validator.validate('91234567')).toBe(false); // Muito curto
    expect(validator.validate('+2449123456789')).toBe(false); // Muito longo
    expect(validator.validate('+244812345678')).toBe(false); // Operadora inválida
  });
});