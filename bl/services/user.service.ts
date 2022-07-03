import { injectable } from "inversify";
import { IUser } from "../../models/models/user";
import { UserRepository } from "../repositories/user.repository";

@injectable()
export class UserService {
    constructor(private readonly _userRepository: UserRepository) {}

    create = async (UserDto: IUser) => {
        return await this._userRepository.create(UserDto);
    }
    
    getAll = async () => {
        return await this._userRepository.getAll();;
    }

    delete = async (id: number) => {
        return await this._userRepository.delete(id);
    }
}