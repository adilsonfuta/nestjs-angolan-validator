import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";

@ValidatorConstraint({name:'AngolanBIValidator', async: false})
export class AngolanBIValidator implements ValidatorConstraintInterface {
    validate(value: any): Promise<boolean> | boolean {
        return typeof value === 'string' && /^\d{9}[A-Z]{2}\d{3}$/.test(value);
    }
    defaultMessage(args: ValidationArguments): string {
          return `${args.property} deve ser um BI angolano válido (Ex: 005928773LA049)`;
 
    }

}