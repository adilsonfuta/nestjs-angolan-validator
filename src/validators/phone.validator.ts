import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";

@ValidatorConstraint({name: 'AngolaPhone', async: false})
export class AngolanPhoneValidator implements ValidatorConstraintInterface {
   
    validate(phone: string): Promise<boolean> | boolean {
        const regex = /^(\+244|00244)?[9][1-9]\d{7}$/;
       return  regex.test(phone.replace(/\s/g,''));
    }
    defaultMessage?(validationArguments?: ValidationArguments): string {
        return 'Número de telefone inválido. Exemplos válidos: +244 923 XXX XXX';
    }


}