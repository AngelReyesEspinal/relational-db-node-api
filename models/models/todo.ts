import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript";
import { UserTodos } from "./usertodos";

@Table({ tableName: "todos" })
export class Todo extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true})
  id!: number;

  @Column({ type: DataType.STRING })
  description!: string;

  @HasMany(() => UserTodos)
  userTodos?: UserTodos[];
}