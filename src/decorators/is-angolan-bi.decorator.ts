import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsAngolanBI(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'IsAngolanBI',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any): boolean {
          return typeof value === 'string' && /^\d{9}[A-Z]{2}\d{3}$/.test(value);
        },
        defaultMessage(args: ValidationArguments): string {
          return `${args.property} deve ser um BI angolano válido (Ex: 005928773LA049)`;
        },
      },
    });
  };
}