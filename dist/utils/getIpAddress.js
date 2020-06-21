"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClientIp = void 0;
exports.getClientIp = function (req) {
    var ipInfo = req.socket.address();
    var ipAddress = ipInfo.address;
    if (!ipAddress) {
        return '';
    }
    // convert from "::ffff:192.0.0.1"  to "192.0.0.1"
    if (ipAddress.substr(0, 7) == "::ffff:") {
        ipAddress = ipAddress.substr(7);
    }
    return ipAddress;
};
