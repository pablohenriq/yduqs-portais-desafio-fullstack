export default () => {
	return {
		nodeEnv: process.env.NODE_ENV || 'development',
		port: parseInt(process.env.PORT || '4000', 10),
		db: { url: process.env.DATABASE_URL },
		log: { level: process.env.LOG_LEVEL },
	}
}
