import {
	registerDecorator,
	ValidationOptions,
	ValidatorConstraint,
	ValidatorConstraintInterface,
} from 'class-validator'

@ValidatorConstraint({ name: 'IsFullName', async: false })
export class IsFullNameConstraint implements ValidatorConstraintInterface {
	private readonly validNameRegex = /^[a-zA-Z]+(?:[' -][a-zA-Z]+)*$/

	validate(value: string) {
		if (typeof value !== 'string') return false
		const trimmedValue = value.trim()
		return (
			trimmedValue.length >= 2 &&
			trimmedValue.length <= 100 &&
			this.validNameRegex.test(trimmedValue) &&
			trimmedValue.includes(' ')
		)
	}

	defaultMessage() {
		return 'Nome completo deve conter nome e sobrenome (somente letras, espaços, hifens ou apóstrofos)'
	}
}

export function IsFullName(validationOptions?: ValidationOptions) {
	return (object: unknown, propertyName: string) => {
		registerDecorator({
			target: object as object['constructor'],
			propertyName,
			options: validationOptions,
			constraints: [],
			validator: IsFullNameConstraint,
		})
	}
}
