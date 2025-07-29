import { registerDecorator, ValidationOptions } from "class-validator";
import { AngolanPhoneValidator } from "../validators/phone.validator";

export function IsAngolaPHONE(ValidationOptions?: ValidationOptions){
    return function(object: Object, propertyName: string){
        registerDecorator({
            name: 'IsAngolaPHONE',
            target: object.constructor,
            propertyName: propertyName,
            options: ValidationOptions,
            validator: new AngolanPhoneValidator(),
        });
    }
}