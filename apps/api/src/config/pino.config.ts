import { ConfigService } from '@nestjs/config'
import { Params as PinoConfigParams } from 'nestjs-pino'

export const pinoConfig = (config: ConfigService): PinoConfigParams => ({
	pinoHttp: {
		level: config.get<string>('log.level', 'info'),
		transport: config.get('nodeEnv') !== 'production' ? { target: 'pino-pretty' } : undefined,
	},
})
