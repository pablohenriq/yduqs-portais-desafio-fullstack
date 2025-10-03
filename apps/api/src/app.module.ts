import path from 'node:path'

import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { AcceptLanguageResolver, I18nModule } from 'nestjs-i18n'
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
		I18nModule.forRoot({
			fallbackLanguage: 'ptBR',
			loaderOptions: { path: path.join(__dirname, '/i18n/'), watch: true },
			resolvers: [AcceptLanguageResolver],
		}),
		ApplicationModule,
	],
})
export class AppModule {}
