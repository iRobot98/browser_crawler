﻿"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const utils_001_1 = require("./utils/utils_001");
const routes_1 = tslib_1.__importDefault(require("./routes"));
const path_1 = tslib_1.__importDefault(require("path"));
const app = (0, express_1.default)();
app.use(utils_001_1.RequestLog);
const port_ = 4500;
app.use(routes_1.default);
app.use("/", express_1.default.static(path_1.default.resolve("./views"), {
    cacheControl: true,
    maxAge: "3600000",
}));
app.listen(port_, () => (0, utils_001_1.Log)(`listening on: ${port_}`).then(() => {
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJQSw4REFBOEI7QUFFOUIsaURBQW9EO0FBQ3BELDhEQUE4QjtBQUM5Qix3REFBd0I7QUFJeEIsTUFBTSxHQUFHLEdBQUcsSUFBQSxpQkFBTyxHQUFFLENBQUM7QUFDdEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxzQkFBVSxDQUFDLENBQUM7QUFDcEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ25CLEdBQUcsQ0FBQyxHQUFHLENBQUMsZ0JBQU0sQ0FBQyxDQUFDO0FBRWhCLEdBQUcsQ0FBQyxHQUFHLENBQ0wsR0FBRyxFQUNILGlCQUFPLENBQUMsTUFBTSxDQUFDLGNBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7SUFDdEMsWUFBWSxFQUFFLElBQUk7SUFDbEIsTUFBTSxFQUFFLFNBQVM7Q0FDbEIsQ0FBQyxDQUNILENBQUM7QUFDRixHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FDckIsSUFBQSxlQUFHLEVBQUMsaUJBQWlCLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtBQUV4QyxDQUFDLENBQUMsQ0FDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVhZF9kaXJzLCBzdG9yZSB9IGZyb20gXCIuL3V0aWxzL2RpcmVjdG9yeV93YWxrXCI7XHJcbmltcG9ydCBodHRwIGZyb20gXCJodHRwXCI7XHJcbmltcG9ydCBodHRwMiBmcm9tIFwiaHR0cDJcIjtcclxuaW1wb3J0IGh0dHBzIGZyb20gXCJodHRwc1wiO1xyXG5pbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xyXG5cclxuaW1wb3J0IHsgTG9nLCBSZXF1ZXN0TG9nIH0gZnJvbSBcIi4vdXRpbHMvdXRpbHNfMDAxXCI7XHJcbmltcG9ydCByb3V0ZXIgZnJvbSBcIi4vcm91dGVzXCI7XHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcblxyXG5pbXBvcnQgb3BlbiBmcm9tIFwib3BlblwiO1xyXG5cclxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xyXG5hcHAudXNlKFJlcXVlc3RMb2cpO1xyXG5jb25zdCBwb3J0XyA9IDQ1MDA7XHJcbmFwcC51c2Uocm91dGVyKTtcclxuXHJcbmFwcC51c2UoXHJcbiAgXCIvXCIsXHJcbiAgZXhwcmVzcy5zdGF0aWMocGF0aC5yZXNvbHZlKFwiLi92aWV3c1wiKSwge1xyXG4gICAgY2FjaGVDb250cm9sOiB0cnVlLFxyXG4gICAgbWF4QWdlOiBcIjM2MDAwMDBcIixcclxuICB9KVxyXG4pO1xyXG5hcHAubGlzdGVuKHBvcnRfLCAoKSA9PlxyXG4gIExvZyhgbGlzdGVuaW5nIG9uOiAke3BvcnRffWApLnRoZW4oKCkgPT4ge1xyXG4gICAgLy8gb3BlbihgaHR0cDovL2xvY2FsaG9zdDoke3BvcnRffS9gKTtcclxuICB9KVxyXG4pO1xyXG4iXX0=