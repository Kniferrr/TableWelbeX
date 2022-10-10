import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function start() {
  const cors = require('cors');
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);
  const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  };
  app.use(cors(corsOptions));

  await app.listen(PORT, () => console.log(`server start on port ${PORT}`));
}
start();
