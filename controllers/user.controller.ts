import { controller, httpDelete, httpGet, httpPost, request, requestParam, response } from 'inversify-express-utils';
import { UserService } from '../bl/services/user.service';
import { Request, Response } from 'express';

@controller('/users')
export class UserController {
    constructor(private readonly _userService: UserService) {}

    @httpPost("/")
    async post(@request() req: Request, @response() res: Response) {
        try {
            await this._userService.create(req.body);
            res.sendStatus(201);
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    }

    @httpDelete("/:id")
    async delete(@requestParam("id") id: string, @response() res: Response): Promise<void> {
        try {
            const _id = Number(id);
            await this._userService.delete(_id)
            res.sendStatus(200);
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    }
    
    @httpGet('/')
    async get () {
        const data = await this._userService.getAll();
        return data;
    }
}