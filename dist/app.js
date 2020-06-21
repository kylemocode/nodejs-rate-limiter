"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var rateLimiter_1 = __importDefault(require("./middleware/rateLimiter"));
var body_parser_1 = __importDefault(require("body-parser"));
var app = express_1.default();
app.use(body_parser_1.default.json());
app.get('/', rateLimiter_1.default, function (req, res) {
    res.send('test');
});
app.listen(5000, function () {
    console.log('server running on port 5000');
});
