import { Test, TestingModule } from '@nestjs/testing'
import { Decimal } from '@prisma/client/runtime/library'

import { PrismaService } from '@/prisma/prisma.service'
import { ApplicationService } from '@/application/application.service'
import { CreateApplicationDto } from '@/application/dto/create-application.dto'
import { Application } from '@/application/entities/application.entity'
import { APPLICATION_REPOSITORY, IApplicationRepository } from '@/application/repositories/application-repository'

describe('ApplicationService', () => {
	let service: ApplicationService
	let repository: IApplicationRepository

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				ApplicationService,
				PrismaService,
				{
					provide: APPLICATION_REPOSITORY,
					useValue: {
						create: jest.fn(),
						findByCpf: jest.fn(),
					},
				},
			],
		}).compile()

		service = module.get<ApplicationService>(ApplicationService)
		repository = module.get(APPLICATION_REPOSITORY)
	})

	it('should be defined', () => {
		expect(service).toBeDefined()
	})

	it('should create an application successfully', async () => {
		const dto: CreateApplicationDto = {
			fullName: 'João Silva',
			cpf: '400.657.150-04',
			birthDate: '1990-01-01',
			email: 'joao@example.com',
			phone: '(86) 99999-9999',
			courseKind: 'ON_CAMPUS',
			instalments: 12,
			instalmentValue: 150.5,
			schoolCompletion: '2010',
			consentTerms: true,
			phoneNotificationOptIn: false,
		}

		const mockApplication: Application = {
			id: '1',
			...dto,
			birthDate: new Date(dto.birthDate),
			instalmentValue: new Decimal(dto.instalmentValue),
			finalPrice: new Decimal(dto.instalmentValue * dto.instalments),
			phoneNotificationOptIn: dto.phoneNotificationOptIn ?? null,
			createdAt: new Date(),
		}
		jest.spyOn(repository, 'create').mockResolvedValue(mockApplication)
		jest.spyOn(repository, 'findByCpf').mockResolvedValue(null)

		const result = await service.create(dto)

		expect(repository.findByCpf).toHaveBeenCalledWith(dto.cpf)
		expect(repository.create).toHaveBeenCalledWith(dto)
		expect(result).toEqual(mockApplication)
	})

	it('should throw error if CPF already exists', async () => {
		const dto: CreateApplicationDto = {
			fullName: 'João Silva',
			cpf: '400.657.150-04',
			birthDate: '1990-01-01',
			email: 'joao@example.com',
			phone: '(86) 99999-9999',
			courseKind: 'ON_CAMPUS',
			instalments: 12,
			instalmentValue: 150.5,
			schoolCompletion: '2010',
			consentTerms: true,
			phoneNotificationOptIn: false,
		}

		jest.spyOn(repository, 'findByCpf').mockResolvedValue({} as Application)

		await expect(service.create(dto)).rejects.toThrow('CPF already applied')
	})
})
