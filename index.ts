import "reflect-metadata";
require('dotenv').config();
import { db } from './models/models';
import { createServer } from "./bl/IoC";

const PORT: any = process.env.PORT || 3030;

const start = async (): Promise<void> => {
    try {
        const server = createServer();
        const app = server.build();

        app.listen(PORT, async () => {
            await db.sequelize.authenticate();
            console.log(`The server is running on port ${PORT}`);
        });
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
};

start();