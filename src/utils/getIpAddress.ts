import { Request } from 'express';

export const getClientIp = function (req: Request) {
	const ipInfo: any = req.socket.address();
	let ipAddress = ipInfo.address;
	if (!ipAddress) {
		return '';
	}
	// convert from "::ffff:192.0.0.1"  to "192.0.0.1"
	if (ipAddress.substr(0, 7) == "::ffff:") {
		ipAddress = ipAddress.substr(7)
	}
	return ipAddress;
};