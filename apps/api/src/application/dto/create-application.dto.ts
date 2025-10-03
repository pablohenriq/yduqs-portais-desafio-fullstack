import { IsBoolean, IsEmail, IsEnum, IsInt, IsNumber, IsString, Matches, Max, Min } from 'class-validator'

import { IsBirthDate } from '@/application/validators/is-birth-date.decorator'
import { IsCPF } from '@/application/validators/is-cpf.decorator'
import { IsFullName } from '@/application/validators/is-full-name.decorator'

import { CourseKind } from '~/prisma/generated/client'

export class CreateApplicationDto {
	@IsFullName({ message: 'Nome completo inválido' })
	fullName!: string

	@IsCPF({ message: 'CPF inválido' })
	cpf!: string

	@IsBirthDate(16, { message: 'Data de nascimento inválida' })
	birthDate!: string

	@IsEmail({}, { message: 'E-mail inválido' })
	email!: string

	@IsString({ message: 'Telefone é obrigatório' })
	@Matches(/^\(\d{2}\) \d{4,5}-\d{4}$/, { message: 'Telefone inválido (xx) xxxxx-xxxx' })
	phone!: string

	@IsEnum(CourseKind, { message: 'O tipo de curso deve ser ON_CAMPUS ou ONLINE' })
	courseKind!: CourseKind

	@IsInt({ message: 'O número de parcelas deve ser um inteiro entre 1 e 18' })
	@Min(1, { message: 'Pelo menos 1 parcela' })
	@Max(18, { message: 'Máximo 18 parcelas' })
	instalments!: number

	@IsNumber({ maxDecimalPlaces: 2 }, { message: 'O valor da parcela deve ser um valor monetário (máximo 2 decimais)' })
	@Min(0.01, { message: 'O valor da parcela deve ser maior que zero' })
	instalmentValue!: number

	@IsString({ message: 'Ano de conclusão do ensino é obrigatório' })
	schoolCompletion!: string

	@IsBoolean({ message: 'Você deve aceitar os termos' })
	consentTerms!: boolean

	@IsBoolean({ message: 'Opt-in de notificações deve ser true ou false' })
	phoneNotificationOptIn?: boolean
}
