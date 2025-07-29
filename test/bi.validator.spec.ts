import { AngolaBIValidator } from "../src/validators/bi.validator";

describe("AngolanBICValidator", () => {
  const validator = new AngolaBIValidator();

  it("should validate correct BI format", () => {
    expect(validator.validate("005928773LA049")).toBe(true);
  });

  it("should reject invalid BI", () => {
    expect(validator.validate("!123456789XX123")).toBe(false); // Letras inválidas
    expect(validator.validate("123456789LA12")).toBe(false); // Muito curto
    expect(validator.validate("A005928773LA049")).toBe(false); // Começa com letra
    expect(validator.validate("005928773LA0491")).toBe(false); // Muito longo
  });
});
