"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const router = express_1.default.Router();
exports.router = router;
router.get("/helloworld", (req, res) => res.send({ response: "hello world" }));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlcGVuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3JvdXRlcy9wcmVwZW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSw4REFBOEI7QUFDOUIsTUFBTSxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUt2Qix3QkFBTTtBQUhmLE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLEVBQUUsQ0FDeEUsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUN0QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcclxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5nZXQoXCIvaGVsbG93b3JsZFwiLCAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSkgPT5cclxuICByZXMuc2VuZCh7IHJlc3BvbnNlOiBcImhlbGxvIHdvcmxkXCIgfSlcclxuKTtcclxuZXhwb3J0IHsgcm91dGVyIH07XHJcbiJdfQ==