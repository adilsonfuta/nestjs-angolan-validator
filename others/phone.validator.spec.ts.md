import { AngolanPhoneValidator } from '../src/validators/phone.validator';

describe('AngolanPhoneValidator', () => {
  const validator = new AngolanPhoneValidator();

  it('should validate correct phone numbers', () => {
    // Formatos internacionais
    expect(validator.validate('+244 912 345 678')).toBe(true);
    expect(validator.validate('00244912345678')).toBe(true);
    expect(validator.validate('244923456789')).toBe(true);
    
    // Formatos nacionais
    expect(validator.validate('912 345 678')).toBe(true);
    expect(validator.validate('923456789')).toBe(true);
  });

  it('should reject invalid phone numbers', () => {
    // Números muito curtos/longos
    expect(validator.validate('91234567')).toBe(false);
    expect(validator.validate('+2449123456789')).toBe(false);
    
    // Operadoras inválidas
    expect(validator.validate('+244812345678')).toBe(false);
    expect(validator.validate('222345678')).toBe(false);
    
    // Formatos errados
    expect(validator.validate('912-345-678')).toBe(false);
    expect(validator.validate('nine one two')).toBe(false);
  });

  it('should handle edge cases', () => {
    expect(validator.validate('null')).toBe(false);
    expect(validator.validate('undefined')).toBe(false);
    expect(validator.validate('')).toBe(false);
  });


});



/* it('should reject invalid phone numbers', () => {
    expect(validator.validate('91234567')).toBe(false); // Muito curto
    expect(validator.validate('+2449123456789')).toBe(false); // Muito longo
    expect(validator.validate('+244812345678')).toBe(false); // Operadora inválida
  });
  */