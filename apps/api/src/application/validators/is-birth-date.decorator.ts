import {
	registerDecorator,
	ValidationArguments,
	ValidationOptions,
	ValidatorConstraint,
	ValidatorConstraintInterface,
} from 'class-validator'
import { differenceInYears, isAfter, isEqual, isValid, parseISO } from 'date-fns'

@ValidatorConstraint({ name: 'IsBirthDate', async: false })
export class IsBirthDateConstraint implements ValidatorConstraintInterface {
	validate(value: string, validationArguments?: ValidationArguments) {
		if (typeof value !== 'string') return false

		const date = parseISO(value)
		if (!isValid(date)) return false

		const today = new Date()

		if (isAfter(date, today) || isEqual(date, today)) return false

		const minAge: number = validationArguments?.constraints?.[0] ?? 16
		return differenceInYears(today, date) >= minAge
	}

	defaultMessage(args?: ValidationArguments) {
		const minAge: number = args?.constraints?.[0] ?? 16
		return `A data de nascimento deve ser válida, ter pelo menos ${minAge} anos e não estar no futuro`
	}
}

export function IsBirthDate(minAge: number = 16, validationOptions?: ValidationOptions) {
	return (object: unknown, propertyName: string) => {
		registerDecorator({
			target: object as object['constructor'],
			propertyName,
			options: validationOptions,
			constraints: [minAge],
			validator: IsBirthDateConstraint,
		})
	}
}
