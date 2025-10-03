import { CreateApplicationDto } from '@/application/dto/create-application.dto'

import { Application } from '~/prisma/generated/client'

export const APPLICATION_REPOSITORY = Symbol('APPLICATION_REPOSITORY')

export interface IApplicationRepository {
	create(data: CreateApplicationDto): Promise<Application>
	findByCpf(cpf: string): Promise<Application | null>
}
