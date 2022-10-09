"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function start() {
    const cors = require('cors');
    const PORT = process.env.PORT || 5000;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const corsOptions = {
        origin: 'http://localhost:3000',
        credentials: true,
        optionSuccessStatus: 200,
    };
    app.use(cors(corsOptions));
    await app.listen(PORT, () => console.log(`server start on port ${PORT}`));
}
start();
//# sourceMappingURL=main.js.map