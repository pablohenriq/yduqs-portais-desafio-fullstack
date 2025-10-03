import { Body, Controller, Post } from '@nestjs/common'
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'

import { ApplicationService } from '@/application/application.service'
import { CreateApplicationDto } from '@/application/dto/create-application.dto'

import { Application } from '~/prisma/generated/client'

@ApiTags('Applications')
@Controller('applications')
export class ApplicationController {
	constructor(private readonly service: ApplicationService) {}

	@Post()
	@ApiOperation({ summary: 'Criar aplicação de estudante' })
	@ApiBody({ type: CreateApplicationDto, description: 'Dados para criar uma nova aplicação' })
	@ApiResponse({ status: 201, description: 'Aplicação criada' })
	@ApiResponse({ status: 409, description: 'CPF duplicado' })
	create(@Body() dto: CreateApplicationDto): Promise<Application> {
		return this.service.create(dto)
	}
}
