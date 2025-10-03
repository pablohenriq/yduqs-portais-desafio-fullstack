import { ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

import { apiReference } from '@scalar/nestjs-api-reference'

import { AppModule } from '@/app.module'

import { otelSDK } from '@/otel'

async function bootstrap() {
	otelSDK.start()

	const app = await NestFactory.create(AppModule)

	app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }))

	const config = new DocumentBuilder()
		.setTitle('YDUQS Portais Desafio Fullstack API')
		.setDescription('API para incrições de candidatos')
		.setVersion('1.0')
		.build()
	const document = SwaggerModule.createDocument(app, config)

	SwaggerModule.setup('/swagger', app, document, { jsonDocumentUrl: 'swagger/openapi.json' })

	app.use(
		'/docs',
		apiReference({
			content: document,
			url: '/swagger/openapi.json',
		}),
	)

	const port = app.get(ConfigService).get<number>('port', 4000)
	await app.listen(port)
}

bootstrap()
