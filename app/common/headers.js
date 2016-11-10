"use strict";
var http_1 = require("@angular/http");
exports.contentHeaders = new http_1.Headers();
exports.contentHeaders.append('Accept', 'application/json');
exports.contentHeaders.append('Content-Type', 'application/json');
exports.wwwHeader = new http_1.Headers();
exports.wwwHeader.append('Content-Type', 'application/x-www-form-urlencoded');
exports.wwwHeader.append('Accept', 'application/json');
//# sourceMappingURL=headers.js.map