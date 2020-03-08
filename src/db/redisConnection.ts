export default class RedisDatabase {
	redis: any;

	constructor() {
		this.redis = require('redis');
	}

	connectDB() {
		const client = this.redis.createClient({
			host: '127.0.0.1',
			port: 6379
		});

		client.on("error", (err: string) => {
			console.log("Error " + err);
		});

		client.on("ready", (err: string) => {
			console.log("DB Ready");
		});
		return client;
	}
}