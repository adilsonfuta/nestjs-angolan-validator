import { registerDecorator, ValidationOptions } from "class-validator";
import { AngolanIBANValidator } from "../validators/iban.validator";

export function IsAngolaIBAN(ValidationOptions?: ValidationOptions){
    return function(object: Object, propertyName: string){
        registerDecorator({
            name: 'IsAngolaIBAN',
            target: object.constructor,
            propertyName: propertyName,
            options: ValidationOptions,
            validator: new AngolanIBANValidator(),
        });
    }
}