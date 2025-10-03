import { Injectable, Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common'

import { PrismaClient } from '~/prisma/generated/client'

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
	private readonly logger = new Logger(PrismaService.name)

	async onModuleInit() {
		try {
			await this.$connect()
			this.logger.log('Prisma client connected successfully')
		} catch (error) {
			this.logger.error('Failed to connect Prisma client', error)
			throw error
		}
	}

	async onModuleDestroy() {
		await this.$disconnect()
	}
}
