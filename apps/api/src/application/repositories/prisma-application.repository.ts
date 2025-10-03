import { Injectable } from '@nestjs/common'

import { PrismaService } from '@/prisma/prisma.service'
import { CreateApplicationDto } from '@/application/dto/create-application.dto'
import { toPrismaApplicationCreate } from '@/application/mappers/application.mapper'
import { IApplicationRepository } from '@/application/repositories/application-repository'

import { Application } from '~/prisma/generated/client'

@Injectable()
export class PrismaApplicationRepository implements IApplicationRepository {
	constructor(private readonly prisma: PrismaService) {}

	async create(data: CreateApplicationDto): Promise<Application> {
		return this.prisma.application.create({ data: toPrismaApplicationCreate(data) })
	}

	async findByCpf(cpf: string): Promise<Application | null> {
		return this.prisma.application.findUnique({ where: { cpf } })
	}
}
