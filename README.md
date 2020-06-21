# ip-rate-limiter
> An expressJS ip-rate-limit middleware built with TypeScript which inspired by Dcard's internship program.

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Weekly Downloads](https://img.shields.io/npm/dw/koa-grounded)](https://img.shields.io/npm/dw/ip-rate-limiter)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fkylemocode%2Fnodejs-rate-limiter.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fkylemocode%2Fnodejs-rate-limiter?ref=badge_shield)

## Requirements
  - [X] 限制每小時來自同一個 IP 的請求數量不得超過 1000
  - [X] 在 response headers 中加入剩餘的請求數量 (X-RateLimit-Remaining) 以及 rate limit 歸零的時間 (X-RateLimit-Reset)
  - [X] 如果超過限制的話就回傳 429 (Too Many Requests)
  - [X] 使用 TypeScript + express + redis 完成

## Quick Start

### Install

```shell
$ npm install ip-rate-limiter
```

### Basic Usage

```TypeScript
	import express, { Application, Request, Response, NextFunction } from 'express';
	import rateLimiter from 'ip-rate-limiter';
	import bodyParser from 'body-parser';

	const app: Application = express();

	app.use(bodyParser.json());

	app.get('/', rateLimiter, (req: Request, res: Response) => {
		res.send('test');
	})

	app.listen(5000, () => {
		console.log('server running on port 5000');
	})
```

## Roadmap
  - [ ] Flexible arguments
  - [ ] Increase Unit Test Coverage
  - [ ] Support for other Redis Client

## license

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fkylemocode%2Fnodejs-rate-limiter.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fkylemocode%2Fnodejs-rate-limiter?ref=badge_large)