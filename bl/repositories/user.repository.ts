import { injectable } from 'inversify';
import { User, IUser } from '../../models/models/user';

@injectable()
export class UserRepository {
    create = async (UserDto: IUser) => {
        const data = await User.create(UserDto);
        return data;
    }

    delete = async (id: number) => {
        const row = await User.findOne({
            where: { id: id },
        });
        
        if (row) {
            await row.destroy(); // deletes the row
        }
        
        return true;
    }

    getAll = async () => {
        const data: User[] = await User.findAll();
        return data;
    }
}

