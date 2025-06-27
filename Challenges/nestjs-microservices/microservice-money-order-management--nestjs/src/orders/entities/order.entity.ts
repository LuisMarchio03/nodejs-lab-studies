import {
  Column,
  DataType,
  PrimaryKey,
  Table,
  Model,
} from 'sequelize-typescript';

export enum OrderStatus {
  Approved = 'approved',
  Pending = 'pending',
}

@Table({
  tableName: 'orders',
})
export class Order extends Model {
  @PrimaryKey
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
  id: string;

  @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
  amount: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: OrderStatus.Pending,
  })
  status: OrderStatus;
}
