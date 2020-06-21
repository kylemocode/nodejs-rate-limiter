"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RedisDatabase = /** @class */ (function () {
    function RedisDatabase() {
        this.redis = require('redis');
    }
    RedisDatabase.prototype.connectDB = function () {
        var client = this.redis.createClient({
            host: '127.0.0.1',
            port: 6379
        });
        client.on("error", function (err) {
            console.log("Error " + err);
        });
        client.on("ready", function (err) {
            console.log("DB Ready");
        });
        return client;
    };
    return RedisDatabase;
}());
exports.default = RedisDatabase;
