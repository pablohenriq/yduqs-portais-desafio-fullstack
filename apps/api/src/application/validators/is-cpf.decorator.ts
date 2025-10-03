import {
	registerDecorator,
	ValidationOptions,
	ValidatorConstraint,
	ValidatorConstraintInterface,
} from 'class-validator'
import cpf from 'cpf'

@ValidatorConstraint({ name: 'IsCPF', async: false })
export class IsCpfConstraint implements ValidatorConstraintInterface {
	validate(value: string) {
		if (typeof value !== 'string') return false
		const onlyDigits = value.replace(/\D/g, '')
		return onlyDigits.length === 11 && cpf.isValid(onlyDigits)
	}

	defaultMessage() {
		return 'Número de CPF inválido'
	}
}

export function IsCPF(validationOptions?: ValidationOptions) {
	return (object: unknown, propertyName: string) => {
		registerDecorator({
			target: object as object['constructor'],
			propertyName,
			options: validationOptions,
			constraints: [],
			validator: IsCpfConstraint,
		})
	}
}
