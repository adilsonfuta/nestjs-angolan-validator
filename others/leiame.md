4. Validação de NIF (Número de Identificação Fiscal)
typescript
import { IsAngolanNIF } from 'nestjs-angolan-validator';

export class TaxDTO {
  @IsAngolanNIF()
  nif: string;
}
Uso Avançado
Você pode usar os validadores diretamente sem decorators:

typescript
import { Validators } from 'nestjs-angolan-validator';

const isValidPhone = new Validators.Phone().validate('912345678');
const isValidBIC = new Validators.BIC().validate('005928773LA049');


4. **Validação de NIF (Número de Identificação Fiscal)  [INDISPONIVEL]** 

```typescript
import { IsAngolanIBAN } from 'nestjs-angolan-validator';

export class AccountDTO {
  @IsAngolanIBAN()
  iban: string;
}