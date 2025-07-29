import { AngolanIBANValidator } from '../src/validators/iban.validator';

describe('AngolanIBANValidator', () => {
  const validator = new AngolanIBANValidator();

  describe('IBANs válidos', () => {
    const validIBANs = [
      'AO06000500000012345678901',     // Formato básico
      'AO06 0005 0000 0012 3456 7890 1', // Com espaços
      'ao06000500000012345678901',     // Letras minúsculas
      'AO06000500000098765432109'      // Outro número válido
    ];

    test.each(validIBANs)('deve aceitar %s', (iban) => {
      expect(validator.validate(iban)).toBe(true);
    });
  });

  describe('IBANs inválidos', () => {
    const invalidIBANs = [
      'AO0600050000001234567890',      // Muito curto (24 caracteres)
      'AO060005000000123456789012',    // Muito longo (26 caracteres)
      'AO0600050000001234567890X',     // Caractere não numérico
      'PT50003500000012345678901',     // País errado
      'AO06000500000012345678902',     // Dígito de controle inválido
      '',                              // Vazio
      'null',                            // Null
      'undefined',                       // Undefined
      '1234567890123456789012345'        // Tipo número
    ];

    test.each(invalidIBANs)('deve rejeitar %s', (iban) => {
      expect(validator.validate(iban)).toBe(false);
    });
  });

  describe('Mensagem de erro padrão', () => {
    it('deve retornar mensagem de erro correta', () => {
      expect(validator.defaultMessage()).toContain('IBAN angolano inválido');
    });
  });
});