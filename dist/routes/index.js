"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const prepend_1 = tslib_1.__importDefault(require("./prepend"));
const index_1 = tslib_1.__importDefault(require("./crawler/index"));
const index_2 = tslib_1.__importDefault(require("./api/index"));
prepend_1.default.use("/api", index_2.default);
prepend_1.default.use("/crawler", index_1.default);
exports.default = prepend_1.default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9yb3V0ZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsZ0VBQStCO0FBRS9CLG9FQUFzQztBQUN0QyxnRUFBOEI7QUFFOUIsaUJBQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLGVBQUcsQ0FBQyxDQUFDO0FBQ3hCLGlCQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxlQUFPLENBQUMsQ0FBQztBQUVoQyxrQkFBZSxpQkFBTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJvdXRlciBmcm9tIFwiLi9wcmVwZW5kXCI7XHJcblxyXG5pbXBvcnQgY3Jhd2xlciBmcm9tIFwiLi9jcmF3bGVyL2luZGV4XCI7XHJcbmltcG9ydCBhcGkgZnJvbSBcIi4vYXBpL2luZGV4XCI7XHJcblxyXG5yb3V0ZXIudXNlKFwiL2FwaVwiLCBhcGkpO1xyXG5yb3V0ZXIudXNlKFwiL2NyYXdsZXJcIiwgY3Jhd2xlcik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XHJcbiJdfQ==