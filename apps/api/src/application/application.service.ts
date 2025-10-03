import { ConflictException, Inject, Injectable } from '@nestjs/common'

import { CreateApplicationDto } from '@/application/dto/create-application.dto'
import { APPLICATION_REPOSITORY, type IApplicationRepository } from '@/application/repositories/application-repository'

import { Application } from '~/prisma/generated/client'

@Injectable()
export class ApplicationService {
	constructor(
		@Inject(APPLICATION_REPOSITORY)
		private readonly repo: IApplicationRepository,
	) {}

	async create(dto: CreateApplicationDto): Promise<Application> {
		const exists = await this.repo.findByCpf(dto.cpf)
		if (exists) throw new ConflictException('CPF already applied')
		return this.repo.create(dto)
	}
}
