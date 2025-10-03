export default () => {
	return {
		port: parseInt(process.env.PORT || '4000', 10),
		db: { url: process.env.DATABASE_URL },
		log: { level: process.env.LOG_LEVEL },
	}
}
