"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var getIpAddress_1 = require("../utils/getIpAddress");
var redisConnection_1 = __importDefault(require("../db/redisConnection"));
exports.default = (function (req, res, next) {
    var redis_client = new redisConnection_1.default().connectDB();
    var ipAddress = getIpAddress_1.getClientIp(req);
    redis_client
        .multi()
        .set([ipAddress, 0, 'EX', 3600, 'NX']) // NX -> 只有 key 不存在才會設立
        .incr(ipAddress)
        .ttl(ipAddress)
        .exec(function (err, replies) {
        if (err) {
            return res.status(500).send(err.message);
        }
        var requestCount = replies[1];
        res.set({
            'X-RateLimit-Remaining': 1000 - requestCount,
            'X-RateLimit-Reset': replies[2]
        });
        if (requestCount > 1000) {
            return res.status(429).send('You sent too many requests in an hour!');
        }
        return next();
    });
});
