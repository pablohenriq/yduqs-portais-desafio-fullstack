import { Body, Controller, Post } from '@nestjs/common'

import { ApplicationService } from '@/application/application.service'
import { CreateApplicationDto } from '@/application/dto/create-application.dto'

import { Application } from '~/prisma/generated/client'

@Controller('applications')
export class ApplicationController {
	constructor(private readonly service: ApplicationService) {}

	@Post()
	create(@Body() dto: CreateApplicationDto): Promise<Application> {
		return this.service.create(dto)
	}
}
