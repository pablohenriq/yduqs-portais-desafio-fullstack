import { i18nValidationMessage } from 'nestjs-i18n'

import { IsBoolean, IsEmail, IsEnum, IsInt, IsNumber, IsString, Matches, Max, Min } from 'class-validator'

import { IsBirthDate } from '@/application/validators/is-birth-date.decorator'
import { IsCPF } from '@/application/validators/is-cpf.decorator'
import { IsFullName } from '@/application/validators/is-full-name.decorator'

import { CourseKind } from '~/prisma/generated/client'

export class CreateApplicationDto {
	@IsFullName({ message: i18nValidationMessage('validation.fullName') })
	fullName!: string

	@IsCPF({ message: i18nValidationMessage('validation.cpf') })
	cpf!: string

	@IsBirthDate(16, { message: i18nValidationMessage('validation.birthDate') })
	birthDate!: string

	@IsEmail({}, { message: i18nValidationMessage('validation.email') })
	email!: string

	@IsString({ message: i18nValidationMessage('validation.required') })
	@Matches(/^\(\d{2}\) \d{4,5}-\d{4}$/, { message: i18nValidationMessage('validation.phone') })
	phone!: string

	@IsEnum(CourseKind, { message: i18nValidationMessage('validation.courseKind') })
	courseKind!: CourseKind

	@IsNumber({ maxDecimalPlaces: 2 }, { message: i18nValidationMessage('validation.instalmentValue') })
	@Min(0.01, { message: i18nValidationMessage('validation.instalmentValueMin') })
	instalmentValue!: number

	@IsInt({ message: i18nValidationMessage('validation.instalments') })
	@Min(1, { message: i18nValidationMessage('validation.instalmentsMin') })
	@Max(18, { message: i18nValidationMessage('validation.instalmentsMax') })
	instalments!: number

	@IsString({ message: i18nValidationMessage('validation.required') })
	schoolCompletion!: string

	@IsBoolean({ message: i18nValidationMessage('validation.consent') })
	consentTerms!: boolean

	@IsBoolean({ message: i18nValidationMessage('validation.optIn') })
	phoneNotificationOptIn?: boolean
}
