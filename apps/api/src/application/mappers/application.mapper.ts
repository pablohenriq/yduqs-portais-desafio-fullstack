import { CreateApplicationDto } from '@/application/dto/create-application.dto'

import { Prisma } from '~/prisma/generated/client'

export const toPrismaApplicationCreate = (dto: CreateApplicationDto): Prisma.ApplicationCreateInput => ({
	fullName: dto.fullName,
	cpf: dto.cpf,
	birthDate: new Date(dto.birthDate),
	email: dto.email,
	phone: dto.phone,
	courseKind: dto.courseKind,
	instalmentValue: new Prisma.Decimal(dto.instalmentValue),
	instalments: dto.instalments,
	finalPrice: new Prisma.Decimal(dto.instalmentValue * dto.instalments),
	schoolCompletion: dto.schoolCompletion,
	consentTerms: dto.consentTerms,
	phoneNotificationOptIn: dto.phoneNotificationOptIn ?? false,
})
