import { ConfigService } from '@nestjs/config'

export const pinoConfig = (config: ConfigService) => ({
	pinoHttp: {
		level: config.get<string>('log.level', 'info'),
		transport: config.get('nodeEnv') !== 'production' ? { target: 'pino-pretty' } : undefined,
	},
})
