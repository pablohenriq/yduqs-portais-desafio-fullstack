import { Module } from '@nestjs/common'

import { PrismaService } from '@/prisma/prisma.service'
import { ApplicationController } from '@/application/application.controller'
import { ApplicationService } from '@/application/application.service'
import { APPLICATION_REPOSITORY } from '@/application/repositories/application-repository'
import { PrismaApplicationRepository } from '@/application/repositories/prisma-application.repository'

@Module({
	controllers: [ApplicationController],
	providers: [
		ApplicationService,
		PrismaService,
		{ provide: APPLICATION_REPOSITORY, useClass: PrismaApplicationRepository },
	],
})
export class ApplicationModule {}
