import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';
import { AngolaBIValidator } from '../validators/bi.validator';

export function IsAngolaBI(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'IsAngolaBI',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: new AngolaBIValidator(),
    });
  };
}