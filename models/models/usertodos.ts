import { Table, Model, Column, DataType, ForeignKey } from "sequelize-typescript";
import { User } from "./user";
import { Todo } from './todo';

@Table({ tableName: "user_todos" })
export class UserTodos extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true})
  id!: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  user_id!: number;
  
  @ForeignKey(() => Todo)
  @Column({ type: DataType.INTEGER })
  todo_id!: number;
}
