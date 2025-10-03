import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import appConfiguration from '@/config/app.config'

import { AppController } from '@/app.controller'
import { AppService } from '@/app.service'

@Module({
	imports: [ConfigModule.forRoot({ isGlobal: true, load: [appConfiguration] })],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
