# nestjs-angolan-validator


## Como Usar em Outros Projetos NestJS

Instale a lib:


```bash
npm install nestjs-angolan-validator
```

Use no DTO:


```typescript
import { IsAngolanBI } from 'nestjs-angolan-bi-validator';

export class CreateUserDto {
  @IsString()
  nome: string;

  @IsAngolanBIC({ message: 'BIC inválido! Exemplo: 005928773LA049' })
  bilhete: string;
}
```
