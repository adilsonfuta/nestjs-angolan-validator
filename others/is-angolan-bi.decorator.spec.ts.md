import 'reflect-metadata';
import { validateSync } from 'class-validator';
import { IsAngolanBI } from '../src/decorators/is-angolan-bi.decorator';

class TestDTO {
  @IsAngolanBI()
  bi: string;
}

describe('IsAngolanBI Decorator', () => {
  it('should validate correct BI format', () => {
    const dto = new TestDTO();
    dto.bi = '005928773LA049'; // Exemplo válido
    const errors = validateSync(dto);
    expect(errors.length).toBe(0);
  });

  it('should reject invalid BI format', () => {
    const dto = new TestDTO();
    dto.bi = '123456789XX123'; // Exemplo inválido
    const errors = validateSync(dto);
    expect(errors.length).toBeGreaterThan(0);
  });
});