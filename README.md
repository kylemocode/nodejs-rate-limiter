# Node.js request limiter middleware with TypeScript
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fkylemocode%2Fnodejs-rate-limiter.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fkylemocode%2Fnodejs-rate-limiter?ref=badge_shield)


- 限制每小時來自同一個 IP 的請求數量不得超過 1000

- 在 response headers 中加入剩餘的請求數量 (X-RateLimit-Remaining) 以及 rate limit 歸零的時間 (X-RateLimit-Reset)

- 如果超過限制的話就回傳 429 (Too Many Requests)

- 使用 TypeScript + express + redis 完成 

## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fkylemocode%2Fnodejs-rate-limiter.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fkylemocode%2Fnodejs-rate-limiter?ref=badge_large)