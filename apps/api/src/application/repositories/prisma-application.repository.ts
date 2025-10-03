import { Injectable } from '@nestjs/common'

import { PrismaService } from '@/prisma/prisma.service'
import { CreateApplicationDto } from '@/application/dto/create-application.dto'
import { IApplicationRepository } from '@/application/repositories/application-repository'

import { Application } from '~/prisma/generated/client'

@Injectable()
export class PrismaApplicationRepository implements IApplicationRepository {
	constructor(private readonly prisma: PrismaService) {}

	async create(data: CreateApplicationDto): Promise<Application> {
		return this.prisma.application.create({ data: data as any })
	}

	async findByCpf(cpf: string): Promise<Application | null> {
		return this.prisma.application.findUnique({ where: { cpf } })
	}
}
