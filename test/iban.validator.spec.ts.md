import { AngolanIBANValidator } from "../src/validators/iban.validator";

describe("AngolanIBANValidator", () => {
  const validator = new AngolanIBANValidator();

  describe("Deve aceitar IBANs válidos", () => {
    const validCases = [
      "AO06000500000012345678901",
      "AO06000500000098765432109",
      "AO06000500000000000000000",
      "AO99123499999999999999999",
      "AO" + "1".repeat(21),
      "AO06 0005 0000 0012 3456 7890 1", // Com espaços
      "ao06-0005-0000-0012-3456-7890-1", // Com hífens e minúsculas
      "AO06000500000012345678901", // Sem espaços
    ];

    test.each(validCases)("IBAN válido: %s", (iban) => {
      expect(validator.validate(iban)).toBe(true);
    });
  });

  describe("Deve rejeitar IBANs inválidos", () => {
    const invalidCases = [
      "AO0600050000001234567890", // Muito curto (22 caracteres)
      "AO060005000000123456789012", // Muito longo (24 caracteres)
      "AO0600050000001234567890A", // Contém letra no final
      "AO0X000500000012345678901", // Contém letra no meio
      "PT50003500000012345678901", // País errado
      "AO06000500000012345678901 ", // Espaço no final
      "AO06000500000012345678901X", // Caractere extra
      "AO0600050000001234567890 ", // Espaço no final de IBAN curto
      "AO060005000000123456789012 ", // Espaço no final de IBAN longo
      "", // String vazia
    ];

    test.each(invalidCases)("IBAN inválido: %s", (iban) => {
      expect(validator.validate(iban)).toBe(false);
    });
  });

  describe("Mensagem de erro", () => {
    it("Deve retornar mensagem descritiva", () => {
      expect(validator.defaultMessage()).toBe(
        'IBAN angolano inválido. O formato deve ser "AO" seguido de 21 dígitos (total 23 caracteres)'
      );
    });
  });
});



/**
 *       null, // Null
      undefined, // Undefined
      12345678901234567890123, // Número
 */