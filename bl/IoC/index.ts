import { Container } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";
import { UserRepository } from "../repositories/user.repository";
import { UserService } from "../services/user.service";
import "../../controllers/user.controller"
import * as bodyParser from 'body-parser';

export const createServer = () => {
    const container = new Container();
    container.bind(UserRepository).toSelf();
    container.bind(UserService).toSelf();

    const server = new InversifyExpressServer(container);
    server.setConfig((app) => {
      app.use(bodyParser.urlencoded({
        extended: true
      }));
      app.use(bodyParser.json());
    });
    return server;
}
