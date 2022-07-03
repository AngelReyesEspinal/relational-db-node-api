import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript";
import { UserTodos } from "./usertodos";

export interface IUser {
  id?: number,
  firstName: string,
  lastName: string,
  userTodos?: UserTodos[]
}

@Table({ tableName: "users" })
export class User extends Model<IUser> {
  @Column({ type: DataType.INTEGER, primaryKey: true })
  id!: number;

  @Column({ type: DataType.STRING })
  firstName!: string;

  @Column({ type: DataType.STRING })
  lastName!: string;

  @Column({ type: DataType.STRING })
  email!: string;

  @HasMany(() => UserTodos)
  userTodos?: UserTodos[];
}