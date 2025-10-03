import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { LoggerModule } from 'nestjs-pino'

import appConfiguration from '@/config/app.config'
import { pinoConfig } from '@/config/pino.config'
import { ApplicationModule } from '@/application/application.module'

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true, load: [appConfiguration] }),
		LoggerModule.forRootAsync({
			inject: [ConfigService],
			useFactory: (config: ConfigService) => pinoConfig(config),
		}),
		ApplicationModule,
	],
})
export class AppModule {}
