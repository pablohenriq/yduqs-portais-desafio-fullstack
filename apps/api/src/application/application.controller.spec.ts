import { INestApplication } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'

import request from 'supertest'

import { PrismaService } from '@/prisma/prisma.service'
import { ApplicationModule } from '@/application/application.module'

describe('ApplicationController (e2e)', () => {
	let app: INestApplication
	let prisma: PrismaService

	beforeAll(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [ApplicationModule],
		}).compile()

		app = moduleFixture.createNestApplication()
		prisma = moduleFixture.get<PrismaService>(PrismaService)
		await app.init()
	})

	afterAll(async () => {
		await app.close()
	})

	beforeEach(async () => {
		await prisma.application.deleteMany()
	})

	it('should create an application successfully', () => {
		const dto = {
			fullName: 'Maria Silva',
			cpf: '987.654.321-00',
			birthDate: '1995-05-15',
			email: 'maria@example.com',
			phone: '(86) 88888-8888',
			courseKind: 'ONLINE',
			instalments: 6,
			instalmentValue: 200.0,
			schoolCompletion: '2015',
			consentTerms: true,
			phoneNotificationOptIn: true,
		}

		return request(app.getHttpServer())
			.post('/applications')
			.send(dto)
			.expect(201)
			.expect((res) => {
				expect(res.body).toHaveProperty('id')
				expect(res.body.fullName).toBe(dto.fullName)
				expect(res.body.cpf).toBe(dto.cpf)
			})
	})

	it('should return 500 for invalid data', () => {
		const invalidDto = {
			fullName: 'Jo',
			cpf: 'invalid-cpf',
			birthDate: '0000',
			email: 'invalid-email',
			phone: 'invalid-phone',
			courseKind: 'INVALID',
			instalments: 0,
			instalmentValue: -10,
			schoolCompletion: '',
			consentTerms: false,
		}

		return request(app.getHttpServer()).post('/applications').send(invalidDto).expect(500)
	})
})
