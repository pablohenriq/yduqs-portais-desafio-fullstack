import { ApiProperty } from '@nestjs/swagger'
import { i18nValidationMessage } from 'nestjs-i18n'

import { IsBoolean, IsEmail, IsEnum, IsInt, IsNumber, IsString, Matches, Max, Min } from 'class-validator'

import { IsBirthDate } from '@/application/validators/is-birth-date.decorator'
import { IsCPF } from '@/application/validators/is-cpf.decorator'
import { IsFullName } from '@/application/validators/is-full-name.decorator'

import { CourseKind } from '~/prisma/generated/client'

export class CreateApplicationDto {
	@ApiProperty({ description: 'Nome completo do candidato', example: 'Pablo Henrique de Oliveira' })
	@IsFullName({ message: i18nValidationMessage('validation.fullName') })
	fullName!: string

	@ApiProperty({ description: 'Número do CPF', example: '400.657.150-04' })
	@IsCPF({ message: i18nValidationMessage('validation.cpf') })
	cpf!: string

	@ApiProperty({ description: 'Data de nascimento no formato ISO', example: '1991-03-27' })
	@IsBirthDate(16, { message: i18nValidationMessage('validation.birthDate') })
	birthDate!: string

	@ApiProperty({ description: 'Endereço de e-mail', example: 'pablo.oliveira@example.com' })
	@IsEmail({}, { message: i18nValidationMessage('validation.email') })
	email!: string

	@ApiProperty({ description: 'Número do telefone', example: '(86) 99999-9999' })
	@IsString({ message: i18nValidationMessage('validation.required') })
	@Matches(/^\(\d{2}\) \d{4,5}-\d{4}$/, { message: i18nValidationMessage('validation.phone') })
	phone!: string

	@ApiProperty({ description: 'Tipo de curso', enum: CourseKind, example: CourseKind.ON_CAMPUS })
	@IsEnum(CourseKind, { message: i18nValidationMessage('validation.courseKind') })
	courseKind!: CourseKind

	@ApiProperty({ description: 'Valor da parcela', example: 150.5, minimum: 0.01 })
	@IsNumber({ maxDecimalPlaces: 2 }, { message: i18nValidationMessage('validation.instalmentValue') })
	@Min(0.01, { message: i18nValidationMessage('validation.instalmentValueMin') })
	instalmentValue!: number

	@ApiProperty({ description: 'Número de parcelas', example: 12, minimum: 1, maximum: 18 })
	@IsInt({ message: i18nValidationMessage('validation.instalments') })
	@Min(1, { message: i18nValidationMessage('validation.instalmentsMin') })
	@Max(18, { message: i18nValidationMessage('validation.instalmentsMax') })
	instalments!: number

	@ApiProperty({ description: 'Ano de conclusão do ensino médio', example: '2010' })
	@IsString({ message: i18nValidationMessage('validation.required') })
	schoolCompletion!: string

	@ApiProperty({ description: 'Consentimento aos termos', example: true })
	@IsBoolean({ message: i18nValidationMessage('validation.consent') })
	consentTerms!: boolean

	@ApiProperty({ description: 'Opt-in para notificações por telefone', example: false, required: false })
	@IsBoolean({ message: i18nValidationMessage('validation.optIn') })
	phoneNotificationOptIn?: boolean
}
